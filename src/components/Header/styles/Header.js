import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover no-repeat;
`;
export const Frame = styled.div``;

export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 64px;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;

    a {
        display: flex;
        text-decoration: none;
    }

    @media (max-width: 1000px) {
        margin: 0 30px;
    }

    @media (max-width: 600px) {
        margin: 0 15px;
        padding: 0;
    }
`;

export const Logo = styled.img`
    width: 200px;
    margin-right: 40px;

    @media (max-width: 1000px) {
        width: 180px;
    }

    @media (max-width: 600px) {
        width: 150px;
    }
`;

export const ButtonLink = styled(RouterLink)`
    display: block;
    background-color: #e50914;
    width: 84px;
    height: fit-content;
    color: white;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;

    &::hover {
        background-color: #f40612;
    }
`;
