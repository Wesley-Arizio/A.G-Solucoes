import React from 'react';
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import mapMarkerImg from '../../assets/map_marker.svg';

import { Aside, Image, Footer } from './styles';

const SideBar = () => {
    const { goBack } = useHistory();

    return (
        <Aside className="sidebar">
          <Image src={mapMarkerImg} alt="Happy" />

          <Footer>
            <button type="button" onClick={goBack}>
              <FiArrowLeft size={24} color="#303030" />
            </button>
          </Footer>
      </Aside>
    );
}

export default SideBar;