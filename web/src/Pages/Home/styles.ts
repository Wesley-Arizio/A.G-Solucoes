import styled from 'styled-components';

export const Content = styled.div`
    width: 100vw;
    min-height: 100vh;

    background: linear-gradient(329.54deg, #303030 0%, #424242 100%);

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;

    max-width: 1440px;
    position: relative;
    padding: 80px 50px;

    @media(max-width: 1024px) {
        padding: 50px 30px;
    }

    @media(max-width: 568px) {
        padding: 20px;
    } 
`;

export const Main = styled.main`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 1024px) {
        justify-content: center;
        flex-direction: column;

        margin-top: 40px;
    }
`; 

export const ContainerText = styled.div`
    width: 40%;
    text-align: left;

    h1 {
        font-size: 46px;
        font-weight: 900;
        line-height: 50px;

        @media(max-width: 1024px) {
            max-width: 75%;
        }

        @media(max-width: 768px) {
            font-size: 36px;
            line-height: 40px;
        }

        @media(max-width: 568px) {
            font-size: 26px;
            line-height: 30px;

            max-width: 80%;
        }
    }

    p {
        margin-top: 20px;
        font-size: 24px;
        line-height: 24px;

        @media(max-width: 1024px) {
            max-width: 45%;
        }

        @media(max-width: 658px) {
            font-size: 18px;
            line-height: 18px;

            max-width: 55%;
        }
    }

    @media(max-width: 1024px) {
        width: 100%;
    }
`;

export const ContainerImage = styled.div`
    width: 50%;

    img {
        width: 100%;
        max-width: 780px;
    }

    @media(max-width: 1024px) {
        width: 100%;

        margin-top: 50px;
        display: flex;
        justify-content: center
    }  

    @media(max-width: 568px) {
        width: 100%;

        margin-top: 50px;

        img {
        width: 100%;
        max-width: 780px;
    }
    }  
`;

export const Header = styled.header`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 768px){
        img {
            width: 150px;
        }
    }

    @media(max-width: 568px){
        img {
            width: 100px;
        }
    }
`;

export const Location = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    text-align: center;

    font-size: 24px;
    line-height: 34px;

    strong {
        font-weight: 800;
    }

    @media(max-width: 768px) {
        font-size: 18px;
        line-height: 24px;
    }

    @media(max-width: 568px) {
        font-size: 10px;
        line-height: 10px;
    }
`;

export const ContainerLink = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;

    a {
        width: 80px;
        height: 80px;
        border-radius: 30px;
        background: #fff;
        transition: all 0.5s;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    a:hover {
        background: rgba(255, 255, 255, 0.3);
    }

    @media(max-width: 768px) {
        flex-direction: column; 

        justify-content: flex-end;
        align-items: flex-end;

        margin-top: 70px;
    }

    @media(max-width: 568px) {
        a {
            width: 40px;
            height: 40px;
            border-radius: 15px;

            .arrow {
                width: 20px;
                height: 20px;
            } 

        }
    }
`;

export const ContainerAuth = styled.div`
    width: 30%;

    position: relative;
    top: -20px;

    .button-login {
        width: 100%;
        height: 80px;

        border-radius: 20px;
        background: #fff;
        color: #303030;  
        border: none;
        text-decoration: none;

        cursor: pointer; 
        transition: all 0.5s;
        &:hover {
            background: rgba(255, 255, 255, 0.3);
        }
    }

    span {
        width: 100%;
        display: flex;
        align-items: center;

        margin-top: 10px;
        margin-left: 10px;
    }

    .register {
        width: auto;
        height: auto;
        border-radius: 0;
        transition: all 0.5s;
        margin-left: 10px;
        background: transparent;
        color: #fff;

        &:hover {
            background: transparent;
        }
    }

    @media(max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 568px) {
        .button-login {
            height: 50px;
        }

        span {
            font-size: 14px;
        }
    }
`;