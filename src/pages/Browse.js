import React from 'react';
import useContent from '../hooks/useContent';
import selectionMap from '../helper/selectionMap';
import BrowseContainer from '../containers/Browse';

const Browse = () => {
    const { series } = useContent('series');
    const { films } = useContent('films');

    const slides = selectionMap({ series, films });

    return <BrowseContainer slides={slides} />;
};

export default Browse;
