import React from 'react';

const MintInformationSliderCard = ({data}) => {
    

    return (
        <div id="mint-information-card">
            <div className="card__wrapper">
                <div className="card__image" style={{backgroundImage:`url(${data?.background})`}}>
                    <img src={data?.img} alt="" className="image__png" />
                </div>
                <div className="card__body" style={{"--color":data.color}}>
                    <h1 className='font-akira title mb-0'><span className='font-akira display-3'>{data.title.point}</span> {data?.title?.text}</h1>
                    <p className="short-desc"> {data?.text} </p>
                </div>
            </div>
        </div>
    );
};

export default MintInformationSliderCard;