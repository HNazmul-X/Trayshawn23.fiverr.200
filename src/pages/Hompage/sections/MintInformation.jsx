import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import MintInformationSliderCard from "../../../components/MintInformationSliderCard/MintInformationSliderCard";
import { mintInformationSliderData } from "../../../data/mintInformationData";

SwiperCore.use([Pagination,Navigation]);

const MintInformation = () => {
    return (
        <section id="mint-information">
            <div className="title text-center pb-3">
                <h1 className="text-uppercase">Mint Information</h1>
            </div>
            <div className="py-3">
                <div className="d-flex public-scale-card">
                    <div className="number flex-shrink-0">
                        <h1>1</h1>
                    </div>
                    <div className="desc">
                        <p>Saturday, December 11, 2021, at 9pm UTC</p>
                        <h1 className="fw-bold">
                            Public Sale <span className=" fw-light">(5400 NFT)</span>
                        </h1>
                    </div>
                </div>
                <div className="container">
                    <p className="text-center fs-5 ">On mint day, you will have several price options for mint : The perks will be unlocked at the prices paid.</p>
                </div>
            </div>

            <div className="mint-information-slider">
                <div className="mint-information-slider__wrapper">
                    <Swiper
                        
                        className="mint-information-slider__slider mb-5"
                        navigation={true}
                        loop={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                                centeredSlides:true
                            },
                        }}>
                        {mintInformationSliderData?.map((data ,index) => (
                            <SwiperSlide>
                                <MintInformationSliderCard data={data}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default MintInformation;
