import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
// import required modules
import { Pagination } from 'swiper/modules';

export default function Banner() {
    return (
        <div className='container mx-auto h-full '>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='flex justify-between items-center px-10 w-full h-full'>
                        <div className='flex-1 flex flex-col justify-start items-start gap-6'>

                            <p className="text-4xl lg:text-5xl text-start font-bold text-gray-900 leading-tight">
                                <span className="text-primary">Teach</span> what you know,
                                <br />
                                <span className="text-primary">Learn</span> what you love.
                            </p>

                            <p className="text-gray-600 text-start text-lg">
                                SkillSwap is a smart platform where you can learn new skills by exchanging<br />
                                what you already know. Grow together through teaching and learning.
                            </p>
                            {/* <div>
                                <label className="input w-80 rounded-full">
                                    <svg className="w-6 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2.5"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <path d="m21 21-4.3-4.3"></path>
                                        </g>
                                    </svg>
                                    <input type="search" className="grow" placeholder="Search Skil here..." />
                                </label>
                            </div> */}
                            <div className='space-x-4'>
                                <button className='py-6 btn text-xl btn-soft btn-primary'>Get Started</button>
                                <button className='py-6 btn text-xl btn-outline btn-primary'>Explor Skills</button>
                            </div>
                        </div>
                        <div className=' flex-1 relative'>
                            <img className='h-[500px]' src="https://i.ibb.co.com/dJbB9mrB/image.png" alt="banner image" />
                        
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>

        </div>
    )

}
