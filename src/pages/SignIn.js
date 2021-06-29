import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';

import HeaderContainer from '../containers/Header';
import FooterContainer from '../containers/Footer';
import Form from '../components/Form';

import { FirebaseContext } from '../context/firebase';

const SignIn = () => {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { firebase } = useContext(FirebaseContext);

    const handleSignin = (e) => {
        e.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((res) => {
                history.push('/browse');
            })
            .catch((err) => {
                setEmail('');
                setPassword('');
                setError(err.message);
            });
    };
    const isInvalid = password === '' || email === '';

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign in</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignin} method='Post'>
                        <Form.Input placeholder='Email address' value={email} onChange={({ target }) => setEmail(target.value)} />
                        <Form.Input
                            type='password'
                            autoComplete='off'
                            placeholder='Password'
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit type='submit' disabled={isInvalid}>
                            Sign In
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        New to Netflix? <Form.Link to='/signup'>Sign up now</Form.Link>
                    </Form.Text>
                    <Form.SmallText>This page is protected by Google reCaptcha to ensure you are not a bot. Learn more.</Form.SmallText>
                </Form>
            </HeaderContainer>

            <FooterContainer />
        </>
    );
};

export default SignIn;
