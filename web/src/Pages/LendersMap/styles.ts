import styled from 'styled-components';


export const Content = styled.div`
    width: 100vw;
    height: 100vh;

    position: relative;
    display: flex;

    .leaflet-container {
        z-index: 5;
    }

    .create-orphanage {
        position: absolute;

        right: 40px;
        bottom: 40px;
        z-index: 10;

        width: 64px;
        height: 64px;
        background: #fff;
        border-radius: 20px;

        display: flex;
        justify-content: center;
        align-items: center;

        transition: background-color 0.5s;
    }
    
    .create-orphanage:hover {
        background: rgba(255, 255, 255, 0.3);
    }

    .map-popup .leaflet-popup-content-wrapper {
        background: #fff;
        border-radius: 20px;
        box-shadow: none;
    }

    .map-popup .leaflet-popup-content {
        color: #303030;
        font-size: 24px;
        font-weight: bold;
        margin: 8px, 12px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            span + span {
                font-size: 20px;
                font-weight: 400;
            }
        }
    }

    .map-popup .leaflet-popup-content a {
        width: 40px;
        height: 40px;
        background-color: #303030;
        border-radius: 12px;

        display: flex;
        justify-content: center;
        align-items: center;
        transition: background-color 0.5s;
        cursor: pointer;
        border: none;
    }

    .map-popup .leaflet-popup-content a:hover {
        background-color: #424242;
    }

    .map-popup .leaflet-popup-tip-container {
        display: none;
    }
`;

export const Aside = styled.aside`
    width: 440px;

    background: linear-gradient(329.54deg, #303030 0%, #424242 100%);
    border-right: 1px solid rgba(255, 255, 255, 0.12);
    padding: 80px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
        font-size: 40px;
        font-weight: 800;
        line-height: 42px;
        margin-top: 64px;
    }

    p {
        line-height: 28px;
        margin-top: 24px;
    }   

    footer {
        display: flex;
        flex-direction: column;

        line-height: 24px;
    }

    footer strong {
        font-weight: 800;
    }

    @media(max-width: 768px) {
        width: 100%;
        /* height: 10px;  */

        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;

        flex-direction: row;
        align-items: center;

        padding: 20px;

        header img {
            width: 44px;
            height: 44px;
        }

        h2, p {
            display: none;
        }   

        footer {
            font-size: 16px;
        }
    }
`;
