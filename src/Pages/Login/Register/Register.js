import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css'
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';


const Register = () => {
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification : true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');

    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user);

    }


    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/');

    }

    return (
        <div className='form-alignment mt-5'>
            <h2 className='text-center mt-5 mb-5'>Register</h2>
            <form className='form-style' onSubmit={handleRegister}>
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="" placeholder='Enter Name' required />
                <br /><br />
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="" placeholder='Enter Email' required />
                <br /><br />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" placeholder='Enter Password' required />
                <br /><br />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'ps-2 text-success' : 'ps-2 text-danger'} htmlFor="terms">Accept terms and condition</label> */}
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept terms and condition</label>
                <br /><br />
                <input
                    disabled={!agree}
                    className='w-50 d-block mx-auto btn btn-primary text-center'
                    type="submit"
                    value="Register" />
            </form>
            <p style={{ cursor: 'pointer' }} className='mt-2'>Already have an account? <span onClick={navigateLogin} className='text-success'>Login</span></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;

/* 
 <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
*/