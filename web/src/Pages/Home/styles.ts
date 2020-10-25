import styled from 'styled-components';

export const Content = styled.div`
    width: 100vw;
    height: 100vh;

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
`;

export const Main = styled.main`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    /* padding: 100px 0px; */
`; 

export const ContainerText = styled.div`
    width: 40%;
    text-align: left;

    h1 {
        font-size: 46px;
        font-weight: 900;
        line-height: 50px;
    }

    p {
        margin-top: 20px;
        font-size: 24px;
        line-height: 24px;
    }
`;

export const ContainerImage = styled.div`
    width: 50%;

    img {
        width: 100%;
        max-width: 780px;
    }
`;

export const Header = styled.header`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

`;

export const Location = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    text-align: right;

    font-size: 24px;
    line-height: 34px;

    strong {
        font-weight: 800;
    }
`;

export const ContainerLink = styled.div`
    width: 100%;

    display: flex;
    justify-content: flex-end;

    
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
`;