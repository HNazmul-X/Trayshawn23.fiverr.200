import React from "react";
import Header from "./sections/Header";
import MintInformation from "./sections/MintInformation";
import OurTeam from "../../components/OurTeam/OurTeam";
import Faq from "./sections/Faq";
import DesignSection from "./sections/DesignSection";
import TrailerVideo from "./../../components/TrailerVideo/TrailerVideo";
import Metavers from "./../../components/Metavers/Metavers";
import Roadmap from "./../../components/Roadmap/Roadmap";
import Footer from "./../../components/Footer/Footer";

const Homepage = () => {
    return (
        <>
            <Header />
            <MintInformation />


            {/* for visible ths section uncomment the design section component */}
            {/* <DesignSection/> */}

            
            <Metavers />
            <TrailerVideo />
            <Roadmap />
            <Faq />
            <OurTeam />
            <Footer />
        </>
    );
};

export default Homepage;
