import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Experts from './Experts/Experts';

const Home = () => {
    return (
        <>
            <PageTitle
                title="Home">
            </PageTitle>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </>
    );
};

export default Home;