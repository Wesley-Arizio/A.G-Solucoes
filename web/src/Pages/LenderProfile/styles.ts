import styled from 'styled-components';

export const Content = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: space-between;
`

export const Container = styled.main`
    width: 100%;
    height: 100%;

    overflow-y: scroll;
    padding: 50px 0;
    background: #303030;
   

    @media(max-width: 1024px) {
        padding: 120px 20px;
    }
`