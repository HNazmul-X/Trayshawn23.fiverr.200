import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import { InlineIcon } from "@iconify/react";
import { designSectionData } from "../../../data/DesignSectionData";

/* installing Swiper */
SwiperCore.use([]);

const DesignSection = () => {
    const [selectedDataId, setSelectedDataId] = useState(designSectionData[0]?.id);
    const [selectedData, setSelectedData] = useState(designSectionData.find((e) => e.id === selectedDataId));
    const [selectedPreviewImg, setSelectedPreviewImg] = useState("");

    useEffect(() => {
        setSelectedData(designSectionData.find((e) => e.id === selectedDataId));
    }, [selectedDataId]);

    useEffect(() => {
        if (selectedData.images.length > 0) {
            setSelectedPreviewImg(selectedData?.images[0]);
        }
    }, [selectedData]);

    return (
        <section id="design-section">
            <div className="design-section-container">
                <div className="image-and-preview">
                    <div className="image-and-preview__wrapper">
                        <div className="preview__preview">
                            <img src={selectedPreviewImg} alt="" />
                        </div>
                        <div className="preview__images">
                            <div className="row row-cols-4 justify-content-center">
                                {selectedData?.images?.map((e) => (
                                    <div className="col preview__image">
                                        <img src={e} onClick={setSelectedPreviewImg.bind(this, e)} alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tabs-sliders">
                    <Swiper
                        className="tabs-sliders__slider"
                        breakpoints={{
                            360: {
                                slidesPerView: 2,
                                spaceBetween: 2,
                            },
                            576: {
                                slidesPerView: 3,
                                spaceBetween: 2,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 2,
                            },
                            992: {
                                slidesPerView: 5,
                                spaceBetween: 2,
                            },
                            1100: {
                                slidesPerView: 7,
                                spaceBetween: 2,
                            },
                        }}>
                        {[...designSectionData].map((e, i) => {
                            return (
                                <SwiperSlide>
                                    <div className="tab-slider-card__cover">
                                        <div className={`tab-slider-card ${e?.id === selectedDataId ? "selected" : ""}`} onClick={setSelectedDataId.bind(this, e?.id)}>
                                            <div className="card__img">
                                                <img src={e.symbol_icon} alt="" />
                                            </div>
                                            <div className="card__body">
                                                <h5>{e.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
                <div className="tabs-details">
                    <div className="tabs-details-wrapper">
                        <div className="title d-flex align-items-center justify-content-between">
                            <h1 className="display-3 fw-800">{selectedData.name}</h1>
                            <h2>{selectedData?.units?.current} unit</h2>
                        </div>

                        <div className="desc">
                            {selectedData?.desc?.map((el) => (
                                <p>{el?.text}</p>
                            ))}
                        </div>

                        <div className="buttons d-flex">
                            <div className=" pink-navyBlue-gd-btn my-0 me-3">
                                {" "}
                                <InlineIcon icon="akar-icons:discord-fill" className="fs-4" /> Join us On Discord
                            </div>
                            <div className="btn btn-primary">
                                {" "}
                                <InlineIcon icon="akar-icons:twitter-fill" className="fs-4" />
                                Join Us On Twitter
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignSection;
