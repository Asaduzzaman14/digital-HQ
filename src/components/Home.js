import React from 'react';
import Banner from './Banner';
import Deeper from './Deeper';
import Teams from './Teams ';
import Trusted from './Trusted';
import WelcomeSection from './WelcomeSection';

const Home = () => {
    return (
        <div>
            <Banner />
            <Trusted />
            <Teams />
            <Deeper />
            <WelcomeSection />
        </div>
    );
};

export default Home;