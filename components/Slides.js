import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";


const slides = [
    {
        img: 'https://static.tildacdn.com/tild3362-3335-4737-a238-313733333133/Volumenzeit_S-7.jpg',
        name: 'Volumenzeit S 2',
        price: 100,
    },
    {
        img: 'https://static.tildacdn.com/tild3362-3335-4737-a238-313733333133/Volumenzeit_S-7.jpg',
        name: 'Volumenzeit S 2',
        price: 250,
    },
    {
        img: 'https://static.tildacdn.com/tild3362-3335-4737-a238-313733333133/Volumenzeit_S-7.jpg',
        name: 'Volumenzeit S 2',
        price: 105,
    },
    {
        img: 'https://static.tildacdn.com/tild3362-3335-4737-a238-313733333133/Volumenzeit_S-7.jpg',
        name: 'Volumenzeit S 2',
        price: 99,
    },
    {
        img: 'https://static.tildacdn.com/tild3362-3335-4737-a238-313733333133/Volumenzeit_S-7.jpg',
        name: 'Volumenzeit S 2',
        price: 199,
    },
];

const Slides = () => {
    return (
        <div className='main_container'>
            <div className='mb-[255px]'>
                <h2 className='font-normal not-italic text-[42px] leading-[25px] text-black mb-[37px]'>Watches</h2>
                <p className='not-italic font-normal text-[14px] leading-[28px] text-[#939393]'>Volumenzeit gives you a total of 48 style combinations with 4 dial types, 4 dial colors, 3 case colors, <br/>
                    multiple stylish strap combinations, and customized engraving options.</p>
                <div className='mt-[83px] relative'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev',
                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {
                            slides.map((i)=>(
                                <SwiperSlide>
                                    <div className=''>
                                        <img className='rounded-[10px]' src={i.img} alt="img"/>
                                        <p className='mt[26px] mb-[23px]'>{i.name}</p>
                                        <span>{i.price}</span>
                           a         </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <div className='custom-prev absolute cursor-pointer z-10 bottom-[-100px] left-[0px]'>
                        <img src="./slides/arrowLeft.svg" alt="arrowLeft"/>
                    </div>
                    <div className='custom-next absolute cursor-pointer z-10 bottom-[-100px] right-[700px]'>
                        <img src="./slides/arrowRight.svg" alt="arrowRight"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slides;