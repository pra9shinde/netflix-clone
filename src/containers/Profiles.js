import React from 'react';
import Header from '../components/Header';
import Profiles from '../components/Profiles';

const ProfilesContainer = ({ user, setProfile }) => {
    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo to='/' alt='Shindeflix' src='/images/shindeflix-logo.png' />
                </Header.Frame>
            </Header>

            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User onClick={() => setProfile({ displayName: user.displayName, photoURL: user.photoURL })}>
                        <Profiles.Picture src={user.photoURL} />
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    );
};

export default ProfilesContainer;
