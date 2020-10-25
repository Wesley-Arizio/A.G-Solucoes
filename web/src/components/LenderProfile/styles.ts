import styled from 'styled-components';


export const ModalContainer = styled.div`
    width: 40vw;
    max-width: 1000px;
    height: auto;

    border-radius: 20px;
    background: #424242;

    padding: 25px;

    margin: 0 auto;
    @media(max-width: 1280px) {
        width: 70vw;
    }

    @media(max-width: 1024px) {
        width: 90vw;
    }

`;

export const ContainerLenderName = styled.div`
    width: 100%;

    position: relative;
    top: 0;

    font-family: Nunito;
    font-style: normal;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;

    span {
        font-size: 18px;
        font-weight: 500;
        line-height: 32px;
        color: rgba(255, 255, 255, 0.6);
    }

    h3 { 
        font-size: 28px;
        font-weight: 100;
        line-height: 38px;  
        margin-top: 7px;
        color: rgba(255, 255, 255, 0.8);    
    }
`;

export const ContainerConsequences = styled.div`
    width: 100%;

    font-family: Nunito;
    font-style: normal;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;

    margin-top: 30px;

    span {
        font-size: 18px;
        font-weight: 500;
        line-height: 32px;
        color: rgba(255, 255, 255, 0.6);
    }

    p {
        font-size: 28px;
        font-weight: 100;
        line-height: 38px;
        text-align: justify;  
        margin-top: 7px;
        color: rgba(255, 255, 255, 0.8);  
    }
`;

export const ContainerPriceRange = styled.div`
    width: 100%;

    font-family: Nunito;
    font-style: normal;
    letter-spacing: 0em;
    text-align: left;

    margin-top: 20px;

    span {
        font-size: 18px;
        font-weight: 500;
        line-height: 32px;
        color: rgba(255, 255, 255, 0.6);
    }

    div span {
        font-size: 28px;
        font-weight: 100;
        line-height: 38px;
        text-align: justify;  
        margin-top: 7px;  
        color: rgba(255, 255, 255, 0.8);  
    }
`;

export const ContainerRate = styled.div`
    width: 100%;

    font-family: Nunito;
    font-style: normal;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;

    margin-top: 20px;

    display: flex;
    flex-direction: column;

    span {
        font-size: 18px;
        font-weight: 500;
        line-height: 32px;
        color: rgba(255, 255, 255, 0.6);
    }

    div {
        margin-top: 4px;

        svg + svg{
            margin: 0 2px; 
        }
    }
`;

export const ContainerButtonContact = styled.button`
    width: 100%;
    height: 60px;

    color: #fff;
    cursor: pointer;
    transition: background-color 0.5s;

    border-radius: 20px;
    background-color: #3CDC8C;
    border: none;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    bottom: 0;
    margin-top: 25px;


    &:hover {
        background-color: #2BBD83;
    }
    img {
        margin-right: 10px;
    }
`;

export const ContainerMap = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    margin-top: 30px;

    span {
        font-size: 18px;
        font-weight: 500;
        line-height: 32px;
        font-family: Nunito;
        font-style: normal;
        letter-spacing: 0em;
        text-align: left;
        color: rgba(255, 255, 255, 0.6);

        margin-bottom: 20px;
    }

    footer {
        padding: 20px 0;
        text-align: center;
        background: #303030;
        border-radius: 0px 0px 20px 20px ;
    }

    footer a {
        line-height: 24px;
        color: #fff;
        text-decoration: none;
    }

    .leaflet-container {
        border-radius: 20px 20px 0px 0px;
    }

`;

export const Map = styled.div`
    width: 100%;
    min-height: 291px;
    border-radius: 20px;
    background: #fff;

    margin-top: 13px; 
`;