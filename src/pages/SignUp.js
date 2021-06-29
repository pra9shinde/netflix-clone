import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';

import HeaderContainer from '../containers/Header';
import FooterContainer from '../containers/Footer';
import Form from '../components/Form';

import { FirebaseContext } from '../context/firebase';

const SignUp = () => {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = name === '' || password === '' || email === '';

    const handleSignup = (e) => {
        e.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((res) => {
                return res.user.updateProfile({ displayName: name, photoURL: Math.floor(Math.random() * 5) + 1 });
            })
            .then(() => {
                history.push('/browse');
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignup} method='Post'>
                        <Form.Input placeholder='First Name' value={name} onChange={({ target }) => setName(target.value)} />
                        <Form.Input placeholder='Email address' value={email} onChange={({ target }) => setEmail(target.value)} />
                        <Form.Input
                            type='password'
                            autoComplete='off'
                            placeholder='Password'
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit type='submit' disabled={isInvalid}>
                            Sign Up
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        Already have a user? <Form.Link to='/signin'>Sign in now</Form.Link>
                    </Form.Text>
                    <Form.SmallText>This page is protected by Google reCaptcha to ensure you are not a bot. Learn more.</Form.SmallText>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
};

export default SignUp;
