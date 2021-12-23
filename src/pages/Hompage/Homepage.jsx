import React from 'react';
import Header from './sections/Header';
import MintInformation from './sections/MintInformation';
import OurTeam from '../../components/OurTeam/OurTeam';
import Faq from './sections/Faq';
import DesignSection from './sections/DesignSection';

const Homepage = () => {
    return (
        <>
            <Header/>
            <MintInformation/>
            <DesignSection/>
            <Faq />
            <OurTeam />
        </>
    );
};

export default Homepage;