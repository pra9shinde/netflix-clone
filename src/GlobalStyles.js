import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html,body{
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        background-color: black;
        color: #333333;
        font-size: 16px;
    }

    .scrollRight {
        position: absolute;
        top: 50%;
        right: 7%;
        display: none;
    }

    .scrollRight .arrows {
        position: relative;
        z-index: 2;
        display: inline-block;
        -webkit-transform: translate(0, -50%);
        transform: translate(0, -50%);
        color: #fff;
        font-size: 10px;
        letter-spacing: 0.1em;
        text-decoration: none;
        transition: opacity 0.3s;
    }
    .scrollRight .arrows:hover {
        opacity: 0.5;
    }

    .scrollRight .arrows span {
        position: absolute;
        left: 0;
        width: 12px;
        height: 12px;
        margin-left: -12px;
        border-right: 1px solid #fff;
        border-bottom: 1px solid #fff;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        -webkit-animation: scroll-animate 2s infinite;
        animation: scroll-animate 2s infinite;
        opacity: 0;
        box-sizing: border-box;
    }
    .scrollRight .arrows span:nth-of-type(1) {
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
    }
    .scrollRight .arrows span:nth-of-type(2) {
        left: 8px;
        -webkit-animation-delay: 0.15s;
        animation-delay: 0.15s;
    }
    .scrollRight .arrows span:nth-of-type(3) {
        left: 16px;
        -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s;
    }
    @-webkit-keyframes scroll-animate {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    @keyframes scroll-animate {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    @media(max-width: 500px){
        .scrollRight {
            display: block;
        }
    }

`;
