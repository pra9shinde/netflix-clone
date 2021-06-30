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
                    <Header src='joker1'>
                        <h1>Hello</h1>
                    </Header>
                </>
            ) : (
                <ProfilesContainer user={user} setProfile={setProfile} />
            )}
        </>
    );
};

export default BrowseContainer;
