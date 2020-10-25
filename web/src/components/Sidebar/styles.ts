import styled from 'styled-components';

export const Aside = styled.aside`
    position: fixed;
    height: 100%;
    padding: 32px 24px;
    background: linear-gradient(329.54deg, #303030 0%, #424242 100%);
  
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    z-index: 2000;

    @media(max-width: 1024px) {
        width: 100%;
        height: 7vh;
        flex-direction: row;
        /* padding: 35px; */
    }
`;

export const Image = styled.img`
    width: 48px;

    @media(max-width: 768px) {
        width: 35px;
    }
`;

export const Footer = styled.footer`
    a, button {
        width: 48px;  
        height: 48px;
    
        border: 0;
    
        background: #fff;
        border-radius: 16px;
    
        cursor: pointer;
    
        transition: background-color 0.2s;
    
        display: flex;
        justify-content: center;
        align-items: center;

        @media(max-width: 768px) {
            width: 38px;
            height: 38px;
        }
    }

    a:hover, button:hover {
        background: rgba(255, 255, 255, 0.3);
    }
    
`;