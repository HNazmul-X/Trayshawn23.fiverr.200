import React from 'react';

const MintInformationSliderCard = ({data}) => {
    

    return (
        <div id="mint-information-card">
            <div className="card__wrapper">
                <div className="card__image" style={{backgroundImage:`url(${data?.background})`}}>
                    <img src="https://www.meta-legends.com/img/image-2.ed4ba361.png" alt="" className="image__png" />
                </div>
                <div className="card__body" style={{"--color":data.color}}>
                    <h1 className='font-akira title mb-0'><span className='font-akira display-3'>2</span> ETH</h1>
                    <p className="short-desc"> <span className="color">! Meta Legends</span> NFT </p>
                </div>
            </div>
        </div>
    );
};

export default MintInformationSliderCard;