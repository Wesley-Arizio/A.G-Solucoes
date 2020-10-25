import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

import { Content, Container } from './styles';

import SideBar from '../../components/Sidebar'; 
import LenderProfile from '../../components/LenderProfile';

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

interface LenderParams {
    id: string
}

const ProfileLender = () => {
    const [lender, setLender] = useState<LenderProp>();

    const params = useParams<LenderParams>();

    useEffect(() => {
        api.get(`lender/${params.id}`).then(res => setLender(res.data));
    }, [params.id]);

    if (!lender) {
        return (<p>Loading...</p>)
    }

    return (
        <Content>
            <SideBar />
            <Container>
                <LenderProfile
                    id={lender?.id}
                    name={lender?.name}
                    latitude={lender.latitude}
                    longitude={lender.longitude}
                    min_price={lender.min_price}
                    max_price={lender.max_price}
                    contact={lender.contact}
                    consequences={lender.consequences}
                />
            </Container>
        </Content>
    );
}

export default ProfileLender;