import React from 'react';

import JumbotronContainer from '../containers/Jumbotron';
import FooterContainer from '../containers/Footer';
import FaqContainer from '../containers/Faq';

const Home = () => {
    return (
        <>
            <JumbotronContainer />
            <FaqContainer />
            <FooterContainer />
        </>
    );
};

export default Home;
