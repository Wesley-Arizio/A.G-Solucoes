import React from 'react';

import { Map, TileLayer, Marker } from 'react-leaflet';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import whatsapp from '../../assets/whatsapp_icon.svg';
import mapMarker from '../../assets/map_marker.svg';

import { 
  ModalContainer,
  ContainerLenderName,
  ContainerConsequences,
  ContainerPriceRange,
  ContainerButtonContact,
  ContainerMap,
} from './styles';

const mapIcon = leaflet.icon({
  iconUrl: mapMarker,
  iconAnchor: [24, 58],
  iconSize: [48, 58],

  popupAnchor: [178, 2]
});

interface LenderProp {
  id: string,
  name: string,
  latitude: number,
  longitude: number,
  min_price: number
  max_price: number,
  contact: number,
  consequences: string,
}


const Profile = ({
  id,
  name,
  latitude,
  longitude,
  min_price,
  max_price,
  contact,
  consequences
}: LenderProp) => {

  return (
      <ModalContainer>
        <ContainerLenderName>
          <span>Nome: </span>
          <h3>{name}</h3>
        </ContainerLenderName>
        <ContainerMap>
          <span>Localização: </span>
          <Map 
            center={[latitude, longitude]} 
            zoom={16} 
            style={{ width: '100%', height: 280 }}
            dragging={false}
            touchZoom={false}
            zoomControl={false}
            scrollWheelZoom={false}
            doubleClickZoom={false}
          >
            <TileLayer 
              url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
            />
            <Marker interactive={false} icon={mapIcon} position={[latitude, longitude]} />
          </Map>
          <footer>
                <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}>Ver rotas no Google Maps</a>
          </footer>
        </ContainerMap>
        <ContainerConsequences>
          <span>Consequências de não pagamento ou atraso: </span>
          <p> 
            {consequences}
          </p>
        </ContainerConsequences>
        <ContainerPriceRange>
          <span>Faixa de preço:</span>
          <div>
            <span>R${min_price} - </span>

            <span>R${max_price}</span>
          </div>
        </ContainerPriceRange>
        <ContainerButtonContact>
          <img src={whatsapp} alt="Whastapp"/>
          Entrar em Contato
        </ContainerButtonContact>
      </ModalContainer>
  );
};

export default Profile;
