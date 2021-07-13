import React, { createContext, useState, useContext } from 'react';
import {
    Container,
    Group,
    Title,
    SubTitle,
    Text,
    Entities,
    Feature,
    FeatureTitle,
    FeatureText,
    FeatureClose,
    Maturity,
    Content,
    Meta,
    Item,
    Image,
} from './styles/Card';

export const FeatureContext = createContext();

export default function Card({ children, ...restProps }) {
    const [showfeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState({});

    return (
        <FeatureContext.Provider value={{ showfeature, setShowFeature, itemFeature, setItemFeature }}>
            <Container {...restProps}>{children}</Container>
        </FeatureContext.Provider>
    );
}

Card.Group = function CardGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Card.Entities = function CardEntities({ children, ...restProps }) {
    return <Entities {...restProps}>{children}</Entities>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
    return <Meta {...restProps}>{children}</Meta>;
};

Card.Feature = function CardFeature({ children, category, ...restProps }) {
    const { showfeature, itemFeature, setShowFeature } = useContext(FeatureContext);

    return showfeature ? (
        <Feature src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`} {...restProps}>
            <Content>
                <FeatureTitle>{itemFeature.title}</FeatureTitle>
                <FeatureText>{itemFeature.description}</FeatureText>
                <FeatureClose onClick={() => setShowFeature(false)}>
                    <img src='/images/icons/close.png' alt='close' />
                </FeatureClose>

                <Group margin='30px 0' flexDirection='row' alignItems='centre'>
                    <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
                    <FeatureText fontWeight='bold'>{itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}</FeatureText>
                </Group>
                {children}
            </Content>
        </Feature>
    ) : null;
};

Card.Item = function CardItem({ item, children, ...restProps }) {
    const { setShowFeature, setItemFeature } = useContext(FeatureContext);
    return (
        <Item
            onClick={() => {
                setItemFeature(item);
                setShowFeature(true);
            }}
            {...restProps}
        >
            {children}
        </Item>
    );
};

Card.Image = function CardImage({ ...restProps }) {
    return <Image {...restProps} />;
};
