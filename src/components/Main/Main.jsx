import React from 'react';
import "./main.css"
import clinic from "../../img/Rectangle 9.png"
import QuestionItem from "../../assets/Question-Item";
import Slider from "../../assets/Slider";
import {Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import questionArray from "../../assets/questionArray.json"

const Main = ({setActive}) => {
    return (
        <main>
            <section className="presentation">
                <div className="presentation__wrapper container">
                    <div className="presentation__name">
                        <h1>
                            Многопрофильная клиника для детей<br/> и взрослых
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur<br/>
                            adipiscing elit, sed do eiusmod tempor<br/>
                            incididunt ut labore
                            et dolore magna aliqua
                        </p>
                    </div>
                    <div className="presentation__picture">
                        <img src={clinic} alt="clinic"/>
                    </div>
                </div>
            </section>
            <section className="questions">
                <h1>Часто задаваемые вопросы</h1>
                {questionArray.map(item =>
                    <QuestionItem item={item} key={item.id}/>
                )}
            </section>
            <div className="sliders">
                <Swiper
                    navigation={{
                        prevEl: ".prev",
                        nextEl: ".next",
                    }}
                    pagination={{
                        type: 'fraction',
                        el: '.swiper-pagination'
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><Slider setActive={setActive}/></SwiperSlide>
                    <SwiperSlide><Slider setActive={setActive}/></SwiperSlide>
                    <SwiperSlide><Slider setActive={setActive}/></SwiperSlide>
                    <SwiperSlide><Slider setActive={setActive}/></SwiperSlide>
                </Swiper>
                <div className="slider__pagination">
                    <div className="prev">
                        <svg width="34" height="18" viewBox="0 0 34 18" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M32.6718 7.67186H4.54493L9.20426 3.03512C9.72416 2.51768 9.72615 1.67678 9.20871 1.15689C8.69127 0.636925 7.8503 0.635 7.33041 1.15237L0.390691 8.05861C0.390226 8.05901 0.389894 8.05947 0.389496 8.05987C-0.129071 8.57731 -0.130731 9.42093 0.389363 9.94009C0.389828 9.94049 0.39016 9.94095 0.390558 9.94135L7.33028 16.8476C7.85011 17.3649 8.69107 17.3631 9.20858 16.8431C9.72602 16.3232 9.72402 15.4823 9.20413 14.9648L4.54493 10.3281H32.6718C33.4054 10.3281 34 9.7335 34 8.99998C34 8.26646 33.4054 7.67186 32.6718 7.67186Z"
                                fill="#E1E1E1"/>
                        </svg>
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="next">
                        <svg width="34" height="34" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_22788_30)">
                                <path
                                    d="M1.32817 15.6719H29.4551L24.7957 11.0351C24.2758 10.5177 24.2739 9.67678 24.7913 9.15689C25.3087 8.63693 26.1497 8.635 26.6696 9.15237L33.6093 16.0586C33.6098 16.059 33.6101 16.0595 33.6105 16.0599C34.1291 16.5773 34.1307 17.4209 33.6106 17.9401C33.6102 17.9405 33.6098 17.941 33.6094 17.9414L26.6697 24.8476C26.1499 25.3649 25.3089 25.3631 24.7914 24.8431C24.274 24.3232 24.276 23.4823 24.7959 22.9648L29.4551 18.3281H1.32817C0.594646 18.3281 4.57764e-05 17.7335 4.57764e-05 17C4.57764e-05 16.2665 0.594646 15.6719 1.32817 15.6719Z"
                                    fill="#E1E1E1"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_22788_30">
                                    <rect width="34" height="34" fill="white" transform="matrix(-1 0 0 1 34 0)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;