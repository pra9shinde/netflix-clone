import React, { useState } from 'react';
import HeaderContainer from '../containers/Header';
import FooterContainer from '../containers/Footer';
import Form from '../components/Form';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignin = (e) => {
        e.preventDefault();
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
                </Form>
            </HeaderContainer>

            <FooterContainer />
        </>
    );
};

export default SignIn;
