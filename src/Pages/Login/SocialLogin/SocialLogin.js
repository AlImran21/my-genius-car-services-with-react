import React from 'react';
import googleLogo from '../../../images/google.svg';
import facebookLogo from '../../../images/facebook.png';
import githubLogo from '../../../images/github.png';
import './SocialLogin.css'
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../hooks/useToken';



const SocialLogin = () => {
    const [
        signInWithGoogle,
        user,
        loading,
        error
    ] = useSignInWithGoogle(auth);

    const [
        signInWithGithub,
        user1,
        loading1,
        error1
    ] = useSignInWithGithub(auth);

    const [token] = useToken(user || user1);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>
    }


    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    if (token) {
        navigate(from, { replace: true });

    }

    return (
        <div>
            <div className='horizontal-divider'>
                <div className='line-left'></div>
                <p>or</p>
                <div className='line-right'></div>
            </div>
            {errorElement}
            <div className=''>
                <button onClick={() => signInWithGoogle()} className='btn btn-success w-75 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={googleLogo} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button className='btn btn-primary w-75 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={facebookLogo} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-dark w-75 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={githubLogo} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;

/* 
 return (
        <div>
            <div className='horizontal-divider'>
                <div className='line-left'></div>
                <p>or</p>
                <div className='line-right'></div>
            </div>
            <div className='input-wrapper'>
                <button className='google-auth'>
                    <img className='' src={googleLogo} alt="" />
                    Google Sign In
                </button>
            </div>
        </div>
    );
*/