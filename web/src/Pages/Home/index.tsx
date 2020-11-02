import React from 'react';
import { FiArrowRight } from 'react-icons/fi'

import { Link } from 'react-router-dom';

import { 
    Content,
    Container,
    Main, 
    ContainerText, 
    ContainerImage, 
    Location, 
    Header, 
    ContainerLink,
    ContainerAuth
} from './styles';

import logoImg from '../../assets/logo_white.svg';
import landing from '../../assets/landing.svg';

const Home = () => {
    return (
        <Content>
            <Container>
                <Header>
                    
                    <img src={logoImg} alt="A.G soluções logo"/>

                    <Location>
                        <strong>Florianopolis</strong>
                        <span>Santa Catarina</span>
                    </Location>
                </Header>

                <Main>
                    <ContainerText>
                        <h1>Consiga emprestimos de forma rápida e prática.</h1>
                        <p>
                            Ache as melhores opções de agiotas na sua cidade
                        </p>
                    </ContainerText>
                    <ContainerImage>
                        <img src={landing} alt="person analizing a list of people"/>
                    </ContainerImage>
                </Main>
                <ContainerLink>
                    <ContainerAuth>
                        <Link to="/auth" className="button-login">
                            Login
                        </Link>
                        <span>
                            Não tem conta?
                                <Link to="/user/create-account" className="register">Cadastre-se aqui</Link>
                        </span>
                    </ContainerAuth>
                    <Link to="/app" className="enter-app">
                        <FiArrowRight size={26} color="#303030" className="arrow"/>
                    </Link>
                </ContainerLink>
            </Container>
        </Content>
    );
}

export default Home;