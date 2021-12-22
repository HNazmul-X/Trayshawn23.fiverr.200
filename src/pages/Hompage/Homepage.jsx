import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from './sections/Header';
import OurTeam from '../../components/OurTeam/OurTeam';
import Faq from '../../components/Faq/Faq';

const Homepage = () => {
    return (
        <>
            <Header/>
            <Faq />
            <OurTeam />
        </>
    );
};

export default Homepage;