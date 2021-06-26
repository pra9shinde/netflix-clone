import React from 'react';
import Header from '../components/Header';

const HeaderContainer = ({ children }) => {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to='/' alt='Shindeflix' src='/images/shindeflix-logo.png' />
                <Header.ButtonLink to='/signin'>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    );
};

export default HeaderContainer;
