import React, {useState, FormEvent} from 'react';
import history from '../../history';

import { Map, TileLayer, Marker } from 'react-leaflet';
import leaflet, { LeafletMouseEvent } from 'leaflet';

import 'leaflet/dist/leaflet.css';

import  {Content, Container, Form, ContainerMap, Label, Button, LabelPrice } from './styles';

import SideBar from '../../components/Sidebar';

import mapMarker from '../../assets/map_marker.svg';
import api from '../../services/api';

const mapIcon = leaflet.icon({
    iconUrl: mapMarker,
    iconAnchor: [24, 58],
    iconSize: [48, 58],

    popupAnchor: [178, 2]
})

interface LenderProp {
    id?: string,
    name: string,
    latitude: number,
    longitude: number,
    min_price: string
    max_price: string,
    contact: string,
    consequences: string,
}

const CreateLender = () => {
    const [position, setPosition] = useState({latitude: 0, longitude: 0});

    const [name, setName] = useState('');
    const [consequences, setConsequences] = useState('');
    const [price, setPrice] = useState({min_price: '', max_price: ''});
    const [contact, setContact] = useState('');   

    const handleMapClick = (event: LeafletMouseEvent) => {
        const { lat, lng } = event.latlng;
        setPosition({latitude: lat, longitude: lng});
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const data: LenderProp = {
            name, 
            consequences,
            contact,
            min_price: price.min_price,
            max_price: price.max_price,
            latitude: position.latitude,
            longitude: position.longitude
        }

        await api.post('lenders', data)
            .then(() => {
                alert('Cadastro feito com sucesso')
            })
            .catch(error => {
                console.log('Error on creating a new lender: ', error)
            });

            history.push('/app');
    }

    return (
        <Content>
            <SideBar />
            <Container>
                <Form onSubmit={handleSubmit}>
                    <h1>Dados</h1>

                    <ContainerMap>
                        <Map 
                            center={[-27.4526303, -48.4088016]} 
                            zoom={16} 
                            style={{ width: '100%', height: 280 }}
                            onClick={handleMapClick}
                        >
                            <TileLayer 
                            url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                            />
                            {
                                position.latitude !== 0 && (
                                <Marker 
                                    interactive={false} 
                                    icon={mapIcon} 
                                    position={[
                                        position.latitude,
                                        position.longitude
                                    ]}
                                />
                                ) 
                            }
                        </Map>
                    </ContainerMap>

                    <Label htmlFor="name">
                        Name: 
                        <input 
                            type="text"
                            placeholder="Digite seu nome: "
                            value={name}
                            onChange={(event => setName(event.target.value))}
                        />
                    </Label>
                    <Label htmlFor="consequences">
                        Consequencias: 
                        <textarea 
                            placeholder="Consequências por atraso ou nao pagamento:  "
                            value={consequences}
                            onChange={event => setConsequences(event.target.value)}
                        />
                    </Label>
                    <LabelPrice htmlFor="Price">
                        Faixa de preços 
                        <div>
                            <input 
                                type="number"
                                placeholder="Minimo: " 
                                value={price.min_price}
                                onChange={event => setPrice({
                                    ...price, 
                                    min_price: event.target.value
                                })}
                            />
                            <input
                                type="number"
                                placeholder="Máximo: "
                                value={price.max_price}
                                onChange={event => setPrice({
                                    ...price, 
                                    max_price: event.target.value
                                })}
                            />
                        </div>
                    </LabelPrice>
                    <Label htmlFor="Contact">
                        Número de Telefone
                        <input 
                            type="number"
                            name="contact" 
                            placeholder="Ex: (48) 9 9999-0000"
                            value={contact}
                            onChange={event => setContact(
                                event.target.value
                            )}
                        />
                    </Label>

                    <Button>Confirmar</Button>
                </Form>
            </Container>
        </Content>
    );
}

export default CreateLender;