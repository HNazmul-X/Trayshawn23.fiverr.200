import React from "react";
import Navbar from "../../../components/Navbar/Navbar";

const Header = () => {
    return (
        <header id="header">
            <Navbar />
            <div className="header-video">
                <iframe class="header-video__video" src="https://player.vimeo.com/video/635048296?h=7b0825ff36" __idm_id__="1062617090"></iframe>
                <div className="header-video__button-cover">
                    <div className="header-video__button-overlay">
                        <button className="sold-out-button font-akira">
                            Sold <span className="outline-text font-akira ms-4">Out</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
