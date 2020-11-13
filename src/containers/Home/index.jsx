import React from 'react';
import HomePageHeaderSection from '../../components/HomePageHeaderSection';
import StayUpToDate from '../../components/StayUpTodate';
import BottomCurve from '../../components/BottomCurve/index';
import SpreadTheWordButton from '../../components/SpreadTheWordButton';
import './index.css';
import GamesCarousel from '../../components/GamesCarousel';

const Home = () => {
    return (
        <>
            <HomePageHeaderSection />
            <GamesCarousel />
            <BottomCurve />
            <SpreadTheWordButton />
            <StayUpToDate />
        </>
    );
};

export default Home;
