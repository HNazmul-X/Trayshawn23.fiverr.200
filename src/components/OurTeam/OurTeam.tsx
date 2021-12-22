import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './OurTeam.css';

const Team = () => {
    return (
        <div className="team">
            <div className="container">
                <div className="teamInner">
                    <span className="teamTitle">
                        <span className="subTitle">OUR</span>
                        <span className="title">TEAM</span>
                    </span>

                    <p className="description">The tremendous amount of work from our incredible team of 13 Angels Legends, allowed Meta Legends to be born.</p>
                </div>

                <div className="teamCard">
                    <div className="card">
                        <div className="cardInner">
                            <div className="hiddenArea">
                                <p>B</p>
                            </div>

                            <div className="info">
                                <img src="" alt="" />

                                <div className="infoInner">
                                    <h1>The Creator</h1>
                                    <h2></h2>
                                </div>

                                <div className="socialIcon">
                                    <Link to="" target="_black"><FontAwesomeIcon icon={faTwitter} /></Link>
                                
                                    <Link to="" target="_black"><FontAwesomeIcon icon={faInstagram} /></Link>
                                </div>
                            </div>
                        </div>

                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;