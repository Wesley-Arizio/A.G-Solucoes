import styled from 'styled-components';

export const Content = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: space-between;

    background: #303030;
`;

export const Container = styled.main`
    width: 100%;
    height: 100%;

    overflow-y: scroll;
    padding: 80px 0;

    @media(max-width: 1024px) {
        padding: 120px 20px;
    }
`

export const Form  = styled.form`
    width: 100%;
    height: auto;
    max-width: 700px;

    margin: 0 auto;
    border-radius: 20px;

    background: #424242;
    padding: 50px 30px;

    h1 { 
        color: #fff;
    }

    @media(max-width: 768px) {
        padding: 20px;
    }
`;

export const ContainerMap = styled.div`
    width: 100%;
    margin-top: 30px; 

    .leaflet-container {
        border-radius: 20px ;
    }
`;

export const Label = styled.label`
    width: 100%;

    margin: 20px 0;

    display: flex;
    flex-direction: column;

    font-family: 'Nunito';
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;


    textarea {
        max-width: 100%;
        min-height: 150px;
        margin: 10px 0;
        padding: 18px 26px;
        background: #fff;
        border-radius: 20px;
        color: #424242; 
    }

    input[type="text"], input[type="number"] {
        height: 64px;
        border-radius: 20px;
        border: none;
        text-decoration: none;
        text-transform: none;

        margin: 10px 0;
        padding: 18px 26px;

        background: #fff;
        color: #424242; 
    }
    
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;   
    }
`;

export const LabelPrice = styled.label`
    width: 100%;
    margin: 20px 0;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    input {
        width: 40%;
        margin: 15px 0;
        padding: 18px 26px;
        border:none;
        background: #fff;
        border-radius: 20px;
        color: #424242; 
    }

    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;   
    }
`;

export const Button = styled.button`
    width: 100%;
    height: 64px;

    background: #303030;

    border-radius: 20px;
    border: none;
    text-align: center;
    text-transform: uppercase;

    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    color: #fff;

    cursor: pointer;
    transition: all 0.5s;
    &:hover {
        background: #fff;
        color: #303030;
    }
`;