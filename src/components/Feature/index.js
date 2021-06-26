import React from 'react';
import { Container, Title, SubTitle } from './styles/Feature';

export default function Feature({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Feature.Title = function featureTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Feature.SubTitle = function featureSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};
