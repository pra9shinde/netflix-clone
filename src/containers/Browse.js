import React, { useContext, useState, useEffect } from 'react';
import ProfilesContainer from './Profiles';
import { FirebaseContext } from '../context/firebase';
import Loading from '../components/Loading';
import Header from '../components/Header';

const BrowseContainer = ({ slides }) => {
    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => {
            // cleanup
            clearTimeout(timer);
        };
    }, [profile.displayName]);

    return (
        <>
            {profile.displayName ? (
                <>
                    {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
                    <Header src='joker1' dontShowOnSmallViewPort>
                        <Header.Frame>
                            <Header.Group>
                                <Header.Logo to='/' alt='Shindeflix' src='/images/shindeflix-logo.png' />
                                <Header.TextLink>Series</Header.TextLink>
                                <Header.TextLink>Films</Header.TextLink>
                            </Header.Group>
                            <Header.Group>
                                <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                                <Header.Profile>
                                    <Header.Picture src={user.photoURL} />
                                    <Header.Dropdown>
                                        <Header.Group>
                                            <Header.Picture src={user.photoURL} />
                                            <Header.TextLink mgRightZero>{user.displayName}</Header.TextLink>
                                        </Header.Group>
                                        <Header.Group>
                                            <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign out</Header.TextLink>
                                        </Header.Group>
                                    </Header.Dropdown>
                                </Header.Profile>
                            </Header.Group>
                        </Header.Frame>
                        <Header.Feature>
                            <Header.FeatureCallout>Watch Joker Now</Header.FeatureCallout>
                            <Header.Text>
                                Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur
                                wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel
                                like he's part of the world around him.
                            </Header.Text>
                            <Header.PlayButton>Play</Header.PlayButton>
                        </Header.Feature>
                    </Header>
                </>
            ) : (
                <ProfilesContainer user={user} setProfile={setProfile} />
            )}
        </>
    );
};

export default BrowseContainer;
