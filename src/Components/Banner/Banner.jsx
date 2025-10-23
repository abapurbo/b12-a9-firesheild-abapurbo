import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
// import required modules
import { Pagination } from 'swiper/modules';
import { FaCommentAlt, FaStar, FaUsers } from 'react-icons/fa';
import { IoBookSharp } from 'react-icons/io5';

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
                    <div className="flex flex-col-reverse lg:flex-row justify-between items-center px-6 lg:px-10 w-full h-full">
                        {/* Left Text Section */}
                        <div className="flex-1 flex flex-col justify-start items-start gap-6 text-center lg:text-left mt-10 lg:mt-0">
                            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                <span className="text-primary">Teach</span> what you know,
                                <br className="hidden sm:block" />
                                <span className="text-primary">Learn</span> what you love.
                            </p>

                            <p className="text-gray-600 text-base sm:text-lg">
                                SkillSwap is a smart platform where you can learn new skills by <br className="hidden md:block" />
                                exchanging what you already know. Grow together through teaching and learning.
                            </p>

                            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                <button className="py-3 sm:py-4 btn text-lg btn-soft btn-primary">Get Started</button>
                                <button className="py-3 sm:py-4 btn text-lg btn-outline btn-primary">Explore Skills</button>
                            </div>
                        </div>

                        {/* Right Image Section */}
                        <div className="flex-1 relative flex justify-center items-center">
                            <img
                                className="h-[300px] sm:h-[400px] lg:h-[500px] object-contain"
                                src="https://i.ibb.co.com/dJbB9mrB/image.png"
                                alt="banner image"
                            />

                            {/* Card 1 - Active Users */}
                            <div className="absolute flex items-center gap-3 w-[160px] sm:w-[180px] h-[60px] sm:h-[70px] 
        bg-white/30 border border-white/20 rounded-xl 
        backdrop-blur-3xl shadow-lg p-4 top-[70%] left-[10%] 
        hover:bg-white/40 transition-all duration-300">
                                <FaUsers className="text-blue-500 text-2xl sm:text-3xl" />
                                <div>
                                    <h1 className="text-lg sm:text-xl font-bold text-gray-800">50k+</h1>
                                    <p className="text-sm text-gray-500">Active Users</p>
                                </div>
                            </div>

                            {/* Card 2 - Skills Shared */}
                            <div className="absolute flex items-center gap-3 w-[160px] sm:w-[180px] h-[60px] sm:h-[70px]
        bg-white/30 border border-white/20 rounded-xl 
        backdrop-blur-3xl shadow-lg p-4 top-[15%] left-[10%]
        hover:bg-white/40 transition-all duration-300">
                                <IoBookSharp className="text-primary text-2xl sm:text-3xl" />
                                <div>
                                    <h1 className="text-lg sm:text-xl font-bold text-gray-800">10k+</h1>
                                    <p className="text-sm opacity-80">Skills Shared</p>
                                </div>
                            </div>

                            {/* Card 3 - Average Rating */}
                            <div className="absolute flex items-center gap-3 w-[160px] sm:w-[180px] h-[60px] sm:h-[70px]
        bg-white/30 border border-white/20 rounded-xl 
        backdrop-blur-md shadow-lg p-4 top-[30%] right-[8%]
        hover:bg-white/40 transition-all duration-300">
                                <FaStar className="text-yellow-400 text-2xl sm:text-3xl drop-shadow-sm" />
                                <div>
                                    <h1 className="text-lg sm:text-xl font-bold text-gray-800">9.5</h1>
                                    <p className="text-sm opacity-80">Average Rating</p>
                                </div>
                            </div>

                            {/* Card 4 - Connections Made */}
                            <div className="absolute flex items-center gap-3 w-[160px] sm:w-[180px] h-[60px] sm:h-[70px]
        bg-white/30 border border-white/20 rounded-xl 
        backdrop-blur-3xl shadow-lg p-4 bottom-[10%] right-[10%]
        hover:bg-white/40 transition-all duration-300">
                                <FaCommentAlt className="text-green-500 text-2xl sm:text-3xl" />
                                <div>
                                    <h1 className="text-lg sm:text-xl font-bold text-gray-800">100k+</h1>
                                    <p className="text-sm text-gray-500">Connections Made</p>
                                </div>
                            </div>
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
