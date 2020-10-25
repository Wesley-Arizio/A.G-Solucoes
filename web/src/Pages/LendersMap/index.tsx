import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import leaflet from 'leaflet';

import { Content, Aside } from './styles';
import 'leaflet/dist/leaflet.css';

import { FiPlus, FiArrowRight } from 'react-icons/fi';
import mapHeaderImage from '../../assets/map_marker.svg';
import mapMarker from '../../assets/map_marker.svg';

import api from '../../services/api';

const mapIcon = leaflet.icon({
    iconUrl: mapMarker,
    iconAnchor: [24, 58],
    iconSize: [48, 58],

    popupAnchor: [178, 2]
})

export interface LenderProp {
    id?: string,
    name: string,
    latitude: number,
    longitude: number,
    min_price: number
    max_price: number,
    contact: number,
    consequences: string,
}

const LendersMap = () => {
    const [lenders, setLenders] = useState<LenderProp[]>([]);
    
    useEffect(() => {
        api.get('lenders').then(res => setLenders(res.data));
    }, []);

    return (
        <Content>
            <Aside>
                <header>
                    <img src={mapHeaderImage} alt="Happy marker in map"/>

                    <h2>Escolha um agiota no mapa</h2>
                    <p>Pegue seu empréstimo agora memso!</p>
                </header>

                <footer>
                    <strong>Florianopolis</strong>
                    <span>Santa Catarina</span>
                </footer>
            </Aside>

            <Map
                center={[-27.4415226, -48.4111996]}
                zoom={15}
                style={{width: '100%', height: '100%'}}
            >
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                {
                    lenders.map(item => (
                        <Marker key={item.id} position={[item.latitude, item.longitude]} icon={mapIcon}>
                            <Popup closeButton={false} minWidth={240} className="map-popup">
                                <div>
                                    <span>{item.name}</span>
                                </div>
                                <Link to={`/profile/${item.id}`}>
                                    <FiArrowRight size={20} color="#fff"/>
                                </Link>
                            </Popup>
                        </Marker>
                    ))
                }
            </Map>
            
            <Link to="/lender/create" className="create-orphanage">
                <FiPlus size={32} color="#303030" />
            </Link>
        </Content>
    );
}

export default LendersMap;