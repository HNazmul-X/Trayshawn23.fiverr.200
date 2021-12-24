import React from 'react';
import { Link } from 'react-router-dom';
import { ourTeams } from '../../data/daja';
// import './OurTeam.css';
import Tilt from 'react-parallax-tilt';

const Team = () => {
    return (
        <div className="team" id="team">
            <div className="container">
                <div className="teamInner">
                    <span className="teamTitle">
                        <span className="subTitle">OUR</span>
                        <span className="title">TEAM</span>
                    </span>

                    <p className="description">The tremendous amount of work from our incredible team of 13 Angels Cards, allowed Meta Cards to be born.</p>
                </div>
            </div>

            <div className="container-fluid">
                <div className="teamCard">
                    <div className="row">
                        {
                            ourTeams.map(team => 
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <div className="tCard">
                                        <div className="hiddenArea">
                                            <p>{team.cardInfo.hidden}</p>
                                        </div>
                                        
                                        <Tilt>
                                            <div className="cardInner">

                                                <div className="info">
                                                    <img src={team.cardInfo.img} alt="" />

                                                    <div className="infoInner">
                                                        <h1>{team.cardInfo.title}</h1>
                                                        <h2>{team.cardInfo.subTitle}</h2>
                                                    </div>

                                                    <div className="socialIcon">
                                                        {team?.cardInfo.twitter && (<Link to={team.cardInfo.link1} target="_black"><img src={team.cardInfo.twitter} alt="" /></Link>)}
                                                    
                                                        {team?.cardInfo.instagram && (<Link to={team.cardInfo.link2} target="_black"><img src={team.cardInfo.instagram} alt="" /></Link>)}
                                                    </div>
                                                </div>
                                            </div>

                                            <img className="shadowImg" src={team.img} alt="" />
                                        </Tilt>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;