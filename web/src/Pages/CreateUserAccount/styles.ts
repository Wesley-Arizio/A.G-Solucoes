import styled from 'styled-components';

export const Content = styled.div`
    width: 100%;
    min-height: 100vh;

    background: linear-gradient(329.54deg, #303030 0%, #424242 100%);

    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;

    background: transparent;

    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 1024px) {
        flex-direction: column;
    } 
`;

export const ContainerImage = styled.div`
    width: 65%;
    height: 100vh;

    position: absolute;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background: transparent;

    @media(max-width: 1024px) {
        display: none;
    }
`;

export const ContainerFormLogin = styled.div`
    width: 35%;
    height: 100vh;

    position: absolute;
    right: 0;

    background: #424242;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;

    padding: 20px;

    @media(max-width: 1024px) {
        width: 100%;
    }

    .button-goback {
        width: 48px;  
        height: 48px;
    
        border: 0;
        background: #fff;
        border-radius: 16px;

        position: absolute;
        top: 20px;
    
        cursor: pointer;
    
        transition: background-color 0.2s;
    
        display: flex;
        justify-content: center;
        align-items: center;

        @media(max-width: 768px) {
            width: 38px;
            height: 38px;
            border-radius: 15px;
        }
    }

    .button-goback:hover {
        background: rgba(255, 255, 255, 0.3);
    }
`;

export const Form = styled.form`
    width: 100%;
    max-width: 1000px;
    height: auto;
    max-height: 80vh;

    margin: 0 auto;

    padding: 20px;
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

    input {
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

export const ContainerSupport = styled.ul`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 20px 0; 
    padding: 0 10px;

    list-style-type: none;

    li a{
        
        font-family: 'Nunito';
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        color: #fff;
    }

    li span {
        margin-left: 10px;
    }

    @media(max-width: 768px){
        width: 100%; 
        flex-direction: column;
        text-align: left;

        li {
            width: 100%;
        }

        li + li {
            margin-top: 5px;
        }
    }
`