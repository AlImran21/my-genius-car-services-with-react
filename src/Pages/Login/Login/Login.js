import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import axios from 'axios';
import useToken from '../../../hooks/useToken';

const Login = () => {
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user);

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (token) {
        navigate(from, { replace: true });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password)

        // console.log(email, password);
    }

    const navigateRegister = (event) => {
        navigate('/register');

    }

    const [
        sendPasswordResetEmail,
        sending
    ] = useSendPasswordResetEmail(auth);



    if (loading || sending) {
        return <Loading></Loading>
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('sent email');
        } else {
            toast('please enter your email');
        }

    }


    return (
        <div>

            <div className='form-alignment mt-5'>
                <PageTitle
                    title="Login">
                </PageTitle>
                <h2 className='text-center mt-5 mb-5'>Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button className='w-50 d-block mx-auto mb-2' variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                {errorElement}
                <p style={{ cursor: 'pointer' }} className='mt-2'>New to genius car? <span onClick={navigateRegister} className='text-success'>Please Register</span></p>
                <p style={{ cursor: 'pointer' }} className='mt-2'>Forget Password? <span onClick={resetPassword} className='text-info'>Reset Password</span></p>

                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;