import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { FaCommentAlt, FaStar, FaUsers } from 'react-icons/fa';
import { IoBookSharp } from 'react-icons/io5';
import learing from '../../../src/assets/Lottie/online_learning.json'
import Lottie from 'lottie-react';
export default function Banner() {
    return (
        <div className='container mx-auto  '>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                // autoplay={{
                //     delay: 4000,
                //     disableOnInteraction: false,
                // }}

                modules={[Pagination, Autoplay, Navigation]}
                className="mySwiper "
            >
                <SwiperSlide>
                    <div
                        className="relative h-full flex flex-col-reverse lg:flex-row justify-between items-center 
      px-6 lg:px-10 w-full min-h-screen overflow-hidden
      bg-gradient-to-br from-white via-blue-50 to-purple-50"
                    >
                        {/* Decorative blur circles */}
                        <div className="absolute top-10 left-10 w-40 sm:w-60 h-40 sm:h-60 bg-blue-200/40 blur-3xl rounded-full"></div>
                        <div className="absolute bottom-10 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-200/40 blur-3xl rounded-full"></div>

                        {/* ===== Left Text Section ===== */}
                        <div
                            className="relative  z-10 flex-1 flex flex-col md:justify-start justify-start items-center  md:items-start gap-6 text-center lg:text-left  lg:mt-0"
                        >
                            <p className="text-2xl md:text-start sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                <span className="text-primary">Teach</span> what you know,
                                <br  className='break'/>
                                <span className="text-primary">Learn</span> what you love.
                            </p>

                            <p className="text-gray-600 text-base md:text-start  sm:text-lg max-w-xl mx-auto lg:mx-0">
                                SkillSwap is a smart platform where you can learn new skills by{" "}
                                <br className="hidden md:block" />
                                exchanging what you already know. Grow together through teaching and
                                learning.
                            </p>

                            <div className="flex flex-wrap   md:w-fit w-full justify-center lg:justify-start gap-4">
                                <button className="py-3 sm:py-4 btn text-lg  btn-primary">
                                    Get Started
                                </button>
                                <button className="py-3 sm:py-4 btn text-lg btn-outline btn-primary">
                                    Explore Skills
                                </button>
                            </div>
                        </div>

                        {/* ===== Right Image Section ===== */}
                        <div className="relative z-10 flex-1 flex justify-center items-center mt-10 lg:mt-0">
                            <img
                                className="h-[260px] sm:h-[350px] md:h-[420px] lg:h-[500px] object-contain drop-shadow-2xl"
                                src="https://i.ibb.co.com/dJbB9mrB/image.png"
                                alt="banner image"
                            />

                            {/* === Card 1 - Active Users === */}
                            <div
                                className="absolute  flex items-center gap-3 w-[140px] sm:w-[160px] md:w-[180px] 
          h-[55px] sm:h-[65px] bg-white/30   rounded-xl 
          backdrop-blur-3xl shadow-lg p-3 sm:p-4 
          top-[68%] left-[5%] sm:left-[10%] 
          hover:bg-white/40 transition-all duration-300"
                            >
                                <FaUsers className="text-blue-500 text-xl sm:text-2xl" />
                                <div>
                                    <h1 className="text-base sm:text-lg font-bold text-gray-800">50k+</h1>
                                    <p className="text-xs sm:text-sm text-gray-500">Active Users</p>
                                </div>
                            </div>

                            {/* === Card 2 - Skills Shared === */}
                            <div
                                className="absolute flex items-center gap-3 w-[140px] sm:w-[160px] md:w-[180px] 
          h-[55px] sm:h-[65px] bg-white/30 border border-white/20 rounded-xl 
          backdrop-blur-3xl shadow-lg p-3 sm:p-4 
          top-[10%] left-[3%] sm:left-[10%] 
          hover:bg-white/40 transition-all duration-300"
                            >
                                <IoBookSharp className="text-primary text-xl sm:text-2xl" />
                                <div>
                                    <h1 className="text-base sm:text-lg font-bold text-gray-800">10k+</h1>
                                    <p className="text-xs sm:text-sm opacity-80">Skills Shared</p>
                                </div>
                            </div>

                            {/* === Card 3 - Average Rating === */}
                            <div
                                className="absolute flex items-center gap-3 w-[130px] sm:w-[160px] md:w-[180px] 
          h-[55px] sm:h-[65px] bg-white/30 border border-white/20 rounded-xl 
          backdrop-blur-md shadow-lg p-3 sm:p-4 
          top-[25%] right-[1%] sm:right-[8%] 
          hover:bg-white/40 transition-all duration-300"
                            >
                                <FaStar className="text-yellow-400 text-xl sm:text-2xl drop-shadow-sm" />
                                <div>
                                    <h1 className="text-base sm:text-lg font-bold text-gray-800">9.5</h1>
                                    <p className="text-xs sm:text-sm opacity-80">Avg Rating</p>
                                </div>
                            </div>

                            {/* === Card 4 - Connections Made === */}
                            <div
                                className="absolute flex items-center gap-3 w-[130px] sm:w-[160px] md:w-[180px] 
          h-[55px] sm:h-[65px] bg-white/30 border border-white/20 rounded-xl 
          backdrop-blur-3xl shadow-lg p-3 sm:p-4 
          bottom-[5%] right-[2%] sm:right-[10%] 
          hover:bg-white/40 transition-all duration-300"
                            >
                                <FaCommentAlt className="text-green-500 text-xl sm:text-2xl" />
                                <div>
                                    <h1 className="text-base sm:text-lg font-bold text-gray-800">100k+</h1>
                                    <p className="text-xs sm:text-sm text-gray-500">Connections</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative h-full flex flex-col-reverse lg:flex-row justify-between items-center 
    px-6 lg:px-10  w-full min-h-screen overflow-hidden
    bg-gradient-to-br from-white via-blue-50 to-purple-50">

                        {/* Decorative blur circles for subtle style */}
                        <div className="absolute top-10 left-10 w-60 h-60 bg-blue-200/40 blur-3xl rounded-full"></div>
                        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200/40 blur-3xl rounded-full"></div>

                        {/* Left Text Section */}
                        <div className="relative z-10 flex-1 flex flex-col justify-start items-center  md:justify-start md:items-start gap-6 text-center lg:text-left  lg:mt-0">
                            <p  className="text-3xl md:text-start text-center sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Learn a New Skill <br className="break hidden md:block" />Today
                            </p>

                            <p className="text-gray-600 md:text-start text-center text-base text-lg max-w-xl mx-auto lg:mx-0">
                                Discover real people sharing real skills—
                                from cooking<br className="break hidden md:block" /> to coding, and everything in between.
                            </p>

                            <div className="flex  justify-center lg:justify-start gap-4">
                                <button className="py-3 uppercase sm:py-4 btn text-lg  btn-primary">
                                    Explore Skills
                                </button>
                                <button className="py-3 uppercase sm:py-4 btn text-lg btn-outline btn-primary">
                                    offer a Skill
                                </button>
                            </div>
                        </div>


                        {/* Right Image Section */}
                        <div className="relative w-[400px] mt md:w-auto z-10 flex-1 flex justify-center items-center">
                            <Lottie animationData={learing} loop={true} />

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide> <div className="relative h-full flex flex-col-reverse lg:flex-row justify-between items-center 
    px-6 lg:px-10 w-full min-h-screen overflow-hidden
    bg-gradient-to-br from-white via-blue-50 to-purple-50">

                    {/* Decorative blur circles for subtle style */}
                    <div className="absolute top-10 left-10 w-60 h-60 bg-blue-200/40 blur-3xl rounded-full"></div>
                    <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200/40 blur-3xl rounded-full"></div>

                    {/* Left Text Section */}
                    <div className="relative z-10 flex-1 flex flex-col justify-start items-center   md:items-start gap-6 
      text-center lg:text-left mt-10 lg:mt-0">
                        <p className="text-3xl md:text-start text-center sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            SkillSwap - Learn, Teach,<br className='break hidden  md:block' />Gorw Togeether
                        </p>

                        <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
                            SkillSwap is a people-powered skill-sharing platform <br className="break hidden md:block" />
                            where anyone can be both a learner and a mentor.
                        </p>


                        <div className="flex flex-wrap md:w-fit w-full justify-center lg:justify-start gap-4">
                            <button className="py-3 sm:py-4 btn text-lg btn-outline btn-primary">Get Started</button>
                            <button className="py-3 sm:py-4 btn text-lg btn-primary">Explore Skills</button>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="relative z-10  flex-1 flex justify-center items-center">
                        <img
                            className="h-[300px]  md:h-[500px] object-contain drop-shadow-2xl"
                            src="https://i.ibb.co.com/gZV03xj4/Screenshot-2025-10-23-155900-removebg-preview.png"
                            alt="banner image"
                        />

                    </div>
                </div></SwiperSlide>

            </Swiper>

        </div>
    )

}
