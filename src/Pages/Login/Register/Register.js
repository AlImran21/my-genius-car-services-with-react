import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const nameRef = useRef ('');
    const emailRef = useRef ('');
    const passwordRef = useRef ();

    const navigate = useNavigate();

    const navigateLogin = (event) => {
        navigate('/login');

    }


    const handleRegister = (event) => {
        event.preventDefault ();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log (name, email, password);

    }

    return (
        <div className='form-alignment mt-5'>
            <h2 className='text-center mt-5 mb-5'>Register</h2>
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
            <p style={{ cursor: 'pointer' }} className='mt-2'>Already have an account? <span onClick={navigateLogin} className='text-success'>Login</span></p>
        </div>
    );
};

export default Register;