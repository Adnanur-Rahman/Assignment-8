import React from 'react';
import Banner from '../Component/Banner';
import AppSummary from '../Component/AppSummary';
import TrendingApp from '../Component/TrendingApp';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AppSummary></AppSummary>
            <TrendingApp></TrendingApp>
        </div>
    );
};

export default Home;