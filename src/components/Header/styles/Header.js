import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover no-repeat;

    @media (max-width: 1100px) {
        ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
    }
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

    @media (max-width: 450px) {
        width: 100px;
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

export const Feature = styled(Container)`
    padding: 150px 0 500px 0;
    flex-direction: column;
    align-items: normal;
    width: 50%;

    @media (max-width: 1100px) {
        display: none;
    }
`;

export const Text = styled.p`
    color: white;
    font-size: 22px;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    margin: 0;
`;

export const FeatureCallout = styled.h2`
    color: white;
    font-size: 50px;
    line-height: normal;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    margin: 0;
    margin-bottom: 20px;
`;

export const Link = styled.p`
    color: white;
    text-decoration: none;
    margin-right: ${({ mgRightZero }) => (mgRightZero ? '0px' : '30px')};
    font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }

    &::last-of-type {
        margin-right: 0;
    }
`;

export const Group = styled.div`
    display: flex;
    align-items: center;
`;

export const Picture = styled.button`
    background: url(${({ src }) => src}) no-repeat;
    border: 0;
    background-size: contain;
    width: 32px;
    height: 32px;
    cursor: pointer;

    @media (max-width: 500px) {
        width: 25px;
        height: 25px;
    }
`;

export const Dropdown = styled.div`
    display: none;
    background-color: black;
    position: absolute;
    padding: 10px;
    width: 100px;
    top: 32px;
    right: 10px;

    ${Group}:last-of-type ${Link} {
        cursor: pointer;
    }

    ${Group} {
        margin-bottom: 10px;

        &:last-of-type {
            margin-bottom: 0px;
        }

        ${Link}, ${Picture} {
            cursor: default;
        }
    }

    button {
        margin-right: 10px;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    position: relative;

    button {
        cursor: pointer;
    }

    &:hover > ${Dropdown} {
        display: flex;
        flex-direction: column;
    }
`;

export const Search = styled.div`
    display: flex;
    align-items: center;

    svg {
        color: white;
        cursor: pointer;
    }

    @media (max-width: 700px) {
        display: none;
    }
`;

export const SearchIcon = styled.button`
    cursor: pointer;
    border: 0;
    background-color: transparent;

    img {
        filter: brightness(0) invert(1);
        width: 16px;
    }
`;

export const SearchInput = styled.input`
    background-color: #44444459;
    color: white;
    border: 1px solid white;
    transition: width 0.5s;
    height: 30px;
    font-size: 14px;
    outline: 0;
    margin-left: ${({ active }) => (active === true ? '10px' : '0px')};
    padding: ${({ active }) => (active === true ? '0 10px' : '0px')};
    opacity: ${({ active }) => (active === true ? '1' : '0')};
    width: ${({ active }) => (active === true ? '200px' : '0px')};
`;

export const PlayButton = styled.button`
    box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
    background-color: #e6e6e6;
    color: #000;
    padding: 10px 20px;
    border-radius: 5px;
    max-width: 130px;
    font-size: 20px;
    margin-top: 30px;
    cursor: pointer;
    transition: background-color 1s;
    outline: 0;
    border: 0;

    &:hover {
        background-color: #ff1e1e;
        color: white;
    }
`;
