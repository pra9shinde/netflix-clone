import React from 'react';

import HeaderContainer from '../containers/Header';
import JumbotronContainer from '../containers/Jumbotron';
import FooterContainer from '../containers/Footer';
import FaqContainer from '../containers/Faq';
import OptForm from '../components/OptForm';
import Feature from '../components/Feature';

const Home = () => {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programs and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel any time.</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder='Email Address' />
                        <OptForm.Button>Try it now</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqContainer />
            <FooterContainer />
        </>
    );
};

export default Home;
