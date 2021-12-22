import React, { useState } from 'react';
// import './Faq.css'
import plus from '../../Assets/Images/plus.55e1a08e.svg';

const Faq = () => {
    const [toggle, setToggle] = useState('');

    const handleToggle = (value) => {
        if (toggle === value) {
            setToggle('');
        } else {
            setToggle(value);
        }
    }

    return (
        <div id="faqArea">
            <div className="container">
                <h1 className="fTitle">
                    <span>FAQ</span>
                </h1>

                <div className="faqInner">
                    <div className="intro">
                        <div className="titleWrapper" style={toggle === '1' ? {backgroundImage: 'linear-gradient(to right , #434bba, #6d3a88)'} : {backgroundImage: 'none'}} onClick={() => handleToggle('1')}>
                            <h2 className='title'>How do I become a Meta Legend ?</h2>
                            <button className='toggleBtn'>
                                <img style={toggle === '1' ? {transform: 'rotate(45deg'} : {transform: 'translate(0px, 0px'}} src={plus} alt="" />
                            </button>
                        </div>

                        {toggle === '1' && <p className="subTitle">Meta Legends will be available to mint at <a href="https://www.meta-legends.com/" target="_blank">https://www.meta-legends.com/</a></p>}
                    </div>

                    <div className="intro">
                        <div className="titleWrapper" style={toggle === '2' ? {backgroundImage: 'linear-gradient(to right , #434bba, #6d3a88)'} : {backgroundImage: 'none'}} onClick={() => handleToggle('2')}>
                            <h2 className='title'>How many Meta Legends will be available ?</h2>
                            <button className='toggleBtn'>
                                <img style={toggle === '2' ? {transform: 'rotate(45deg'} : {transform: 'translate(0px, 0px'}} src={plus} alt="" />
                            </button>
                        </div>

                        {toggle === '2' && <p className="subTitle">12345</p>}
                    </div>

                    <div className="intro">
                        <div className="titleWrapper" style={toggle === '3' ? {backgroundImage: 'linear-gradient(to right , #434bba, #6d3a88)'} : {backgroundImage: 'none'}} onClick={() => handleToggle('3')}>
                            <h2 className='title'>When am I going to be able to mint my NFTs ?</h2>
                            <button className='toggleBtn'>
                                <img style={toggle === '3' ? {transform: 'rotate(45deg'} : {transform: 'translate(0px, 0px'}} src={plus} alt="" />
                            </button>
                        </div>

                        {toggle === '3' && <p className="subTitle">PUBLIC SALES : SATURDAY, DECEMBER 11, 2021 9PM UTC.<br />WHITELIST : SUNDAY, DECEMBER 12, 2021 9PM UTC.</p>}
                    </div>

                    <div className="intro">
                        <div className="titleWrapper"  style={toggle === '4' ? {backgroundImage: 'linear-gradient(to right , #434bba, #6d3a88)'} : {backgroundImage: 'none'}} onClick={() => handleToggle('4')}>
                            <h2 className='title'>What is the price ?</h2>
                            <button className='toggleBtn'>
                                <img style={toggle === '4' ? {transform: 'rotate(45deg'} : {transform: 'translate(0px, 0px'}} src={plus} alt="" />
                            </button>
                        </div>

                        {toggle === '4' && <p className="subTitle">MONDAY, DECEMBER 13, 2021.</p>}
                    </div>

                    <div className="intro">
                        <div className="titleWrapper" style={toggle === '5' ? {backgroundImage: 'linear-gradient(to right , #434bba, #6d3a88)'} : {backgroundImage: 'none'}} onClick={() => handleToggle('5')}>
                            <h2 className='title'>When is the reveal ?</h2>
                            <button className='toggleBtn'>
                                <img style={toggle === '5' ? {transform: 'rotate(45deg'} : {transform: 'translate(0px, 0px'}} src={plus} alt="" />
                            </button>
                        </div>

                        {toggle === '5' && <p className="subTitle">MONDAY, DECEMBER 13, 2021.</p>}
                    </div>

                    <div className="intro">
                        <div className="titleWrapper" style={toggle === '6' ? {backgroundImage: 'linear-gradient(to right , #434bba, #6d3a88)'} : {backgroundImage: 'none'}} onClick={() => handleToggle('6')}>
                            <h2 className='title'>Where can I view my NFTs ?</h2>
                            <button className='toggleBtn'>
                                <img style={toggle === '6' ? {transform: 'rotate(45deg'} : {transform: 'translate(0px, 0px'}} src={plus} alt="" />
                            </button>
                        </div>

                        {toggle === '6' && <p className="subTitle">Once minted, you'll just need to login into your OpenSea account to view your NFTs.</p>}
                    </div>

                    <div className="intro">
                        <div className="titleWrapper"  style={toggle === '7' ? {backgroundImage: 'linear-gradient(to right , #434bba, #6d3a88)'} : {backgroundImage: 'none'}} onClick={() => handleToggle('7')}>
                            <h2 className='title'>What blockchain will you be using ?</h2>
                            <button className='toggleBtn'>
                                <img style={toggle === '7' ? {transform: 'rotate(45deg'} : {transform: 'translate(0px, 0px'}} src={plus} alt="" />
                            </button>
                        </div>

                        {toggle === '7' && <p className="subTitle">The Ethereum Blockchain.</p>}
                    </div>

                    <div className="intro">
                        <div className="titleWrapper" style={toggle === '8' ? {backgroundImage: 'linear-gradient(to right , #434bba, #6d3a88)'} : {backgroundImage: 'none'}} onClick={() => handleToggle('8')}>
                            <h2 className='title'>What are your secondaries royalties fees</h2>
                            <button className='toggleBtn'>
                                <img style={toggle === '8' ? {transform: 'rotate(45deg'} : {transform: 'translate(0px, 0px'}} src={plus} alt="" />
                            </button>
                        </div>

                        {toggle === '8' && <p className="subTitle">5%.</p>}
                    </div>

                    <div className="intro">
                        <div className="titleWrapper"  style={toggle === '9' ? {backgroundImage: 'linear-gradient(to right , #434bba, #6d3a88)'} : {backgroundImage: 'none'}} onClick={() => handleToggle('9')}>
                            <h2 className='title'>Do you have a long term roadmap ? What is the future of Meta Legends ?</h2>
                            <button className='toggleBtn'>
                                <img style={toggle === '9' ? {transform: 'rotate(45deg'} : {transform: 'translate(0px, 0px'}} src={plus} alt="" />
                            </button>
                        </div>

                        {toggle === '9' && <p className="subTitle">Discover our <a href="https://discord.com/invite/qCFfgVEy7s" target="_blank">📜</a> | roadmap or on this website</p>}
                    </div>

                    <div className="intro">
                        <div className="titleWrapper" style={toggle === '10' ? {backgroundImage: 'linear-gradient(to right , #434bba, #6d3a88)'} : {backgroundImage: 'none'}} onClick={() => handleToggle('10')}>
                            <h2 className='title'>What is the team ?</h2>
                            <button className='toggleBtn'>
                                <img style={toggle === '10' ? {transform: 'rotate(45deg'} : {transform: 'translate(0px, 0px'}}  src={plus} alt="" />
                            </button>
                        </div>

                        {toggle === '10' && <p className="subTitle">
                            The team consists of a renowned 3D designer.<br />
                            ( <a href="https://twitter.com/HacquardMaxime" target='_blank'>https://twitter.com/HacquardMaxime</a> )<br /><br />

                            2 French entrepreneurs at the head of more than 12 companies in 4 different countries.<br />
                            ( <a href="https://www.instagram.com/robj_x/" target='_blank'>https://www.instagram.com/robj_x/</a> &<br /> <a href="https://www.instagram.com/sa_limitless/" target='_blank'>https://www.instagram.com/sa_limitless</a>)<br /><br />

                            1 Expert advisor in crypto Sphere. (<br /> <a href="https://www.instagram.com/quentin.riviera/" target='_blank'>https://www.instagram.com/quentin.riviera )</a><br /><br />

                            9 full-time collaborators on design, communication and development.
                        </p>}
                    </div>

                    <div className="intro">
                        <div className="titleWrapper" style={toggle === '11' ? {backgroundImage: 'linear-gradient(to right , #434bba, #6d3a88)'} : {backgroundImage: 'none'}} onClick={() => handleToggle('11')}>
                            <h2 className='title'>Will there be a pre-sale?</h2>
                            <button className='toggleBtn'>
                                <img style={toggle === '11' ? {transform: 'rotate(45deg'} : {transform: 'translate(0px, 0px'}} src={plus} alt="" />
                            </button>
                        </div>

                        {toggle === '11' && <p className="subTitle">
                            We actually do a Presale : spots will be available and will be capped at 1000 members. (Go to ⚪┃how-to-whitelist-me for have your place).<br /><br />

                            If you want to have a chance to be in WhiteList, invite your friends in our server Discord : <a href="https://discord.com/invite/meta-legends" target='_blank'>https://discord.gg/meta-legends</a><br /><br />

                            Being whitelisted offers you the possibility to get a pre-mint.
                        </p>}
                    </div>

                    <div className="intro">
                        <div className="titleWrapper" style={toggle === '12' ? {backgroundImage: 'linear-gradient(to right , #434bba, #6d3a88)'} : {backgroundImage: 'none'}} onClick={() => handleToggle('12')}>
                            <h2 className='title'>Will there be giveaways?</h2>
                            <button className='toggleBtn'>
                                <img style={toggle === '12' ? {transform: 'rotate(45deg'} : {transform: 'translate(0px, 0px'}} src={plus} alt="" />
                            </button>
                        </div>

                        {toggle === '12' && <p className="subTitle">
                            Yes of course ! We have very original and interesting ideas in terms of giveaways.<br />
                            Check out the <a href="https://discord.com/invite/342CdmTQ">#Give aways channel in Discord</a>.
                        </p>}
                    </div>

                    <div className="intro">
                        <div className="titleWrapper" style={toggle === '13' ? {backgroundImage: 'linear-gradient(to right , #434bba, #6d3a88)'} : {backgroundImage: 'none'}} onClick={() => handleToggle('13')}>
                            <h2 className='title'>How do I communicate with people from my country ?</h2>
                            <button className='toggleBtn'>
                                <img style={toggle === '13' ? {transform: 'rotate(45deg'} : {transform: 'translate(0px, 0px'}} src={plus} alt="" />
                            </button>
                        </div>

                        {toggle === '13' && <p className="subTitle">
                            We created language specific channels :<br />
                            Please go to <a href="https://discord.com/invite/Q3RU9TupMn" target='_blank'>🌍 ┃ languages</a> for find your language
                        </p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;