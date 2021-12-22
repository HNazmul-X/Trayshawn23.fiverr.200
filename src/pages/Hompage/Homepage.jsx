import React from 'react';
import Header from './sections/Header';
import MintInformation from './sections/MintInformation';
import OurTeam from '../../components/OurTeam/OurTeam';
import Faq from '../../components/Faq/Faq';

const Homepage = () => {
    return (
        <>
            <Header/>
            <MintInformation/>
            <Faq />
            <OurTeam />
        </>
    );
};

export default Homepage;