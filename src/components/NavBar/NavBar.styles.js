import styled from 'styled-components';

export const NavBars = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 999;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: rgb(60, 62, 68);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    color: rgb(255, 255, 255);
    font-size: 1rem;
    font-weight: bold;
    padding: 0 10px;
    outline: none;
    h1 {
        font-size: 1.5rem;
        font-weight: bold;
        color: rgb(255, 255, 255);
        margin: 0;outline: none;
    }
    a{
        text-decoration: none;
        color: rgb(255, 255, 255);outline: none;    
    }
`;
