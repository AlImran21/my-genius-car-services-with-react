import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const emailRef = useRef ('');
    const passwordRef = useRef ('');
    const navigate = useNavigate ();

    const handleSubmit = (event) => {
        event.preventDefault ();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log (email, password);
    }

    const navigateRegister = (event) => {
        navigate ('/register');

    } 


    return (
        <div>

            <div className='form-alignment mt-5'>
                <h2 className='text-center mt-5 mb-5'>Login</h2>
                <Form onSubmit={handleSubmit}>
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
                        Submit
                    </Button>
                </Form>
                <p style={{cursor: 'pointer'}} className='mt-2'>New to genius car? <span onClick={navigateRegister} className='text-danger'>Please Register</span></p>
            </div>
        </div>
    );
};

export default Login;