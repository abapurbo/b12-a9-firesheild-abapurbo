import React, { useEffect, useState } from "react";
import { FaStar, FaChalkboardTeacher, FaRegClock, FaCheckCircle } from "react-icons/fa";
import TopRatedProvider from "./TopRatedProvider";
import AOS from "aos";
import "aos/dist/aos.css";


export default function TopRatedProviders() {
    const [topProviders, setTopProviders] = useState([])
    useEffect(() => {
        fetch('/top_rated.json')
            .then(res => res.json())
            .then(data => setTopProviders(data))
    }, [])

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: false,
            mirror: true,
        });
    }, []);
    return (
        <section className="py-10 mb-10 bg-gray-50">
            {/* ===== Top Rated Providers ===== */}
            <div data-aos='fade-up' className="text-center mb-14">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                    Top Rated <span className="text-indigo-600">Providers</span>
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                    Meet our best mentors and instructors who are rated highly by our community.
                </p>
            </div>

            {/* Providers Grid */}
            <div className="container mx-auto px-10">
                <div data-aos="fade-up"
                    className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 transition-transform">
                    {
                        topProviders.map((topProvider, index) => <TopRatedProvider key={index} topProvider={topProvider}></TopRatedProvider>)
                    }
                </div>
            </div>

            {/* ===== How It Works Section ===== */}
            <div className="mt-32 text-center container mx-auto px-6 md:px-10">
                <div data-aos='fade-up'  data-aos-offset="50">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        How <span className="text-indigo-600">It Works</span>
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        Learn how to connect with top providers and get the most out of our platform.
                    </p>
                </div>

                <div data-aos='fade-up' className="grid gap-10 mt-12 sm:grid-cols-3">
                    {/* Step 1 */}
                    <div className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 rounded-3xl shadow-lg p-8 flex flex-col items-center text-center transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
                        <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full text-4xl mb-4 flex items-center justify-center">
                            <FaChalkboardTeacher />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Choose a Provider</h3>
                        <p className="text-gray-600 text-sm">
                            Browse through our top-rated providers and select the one that fits your learning goals.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 rounded-3xl shadow-lg p-8 flex flex-col items-center text-center transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
                        <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full text-4xl mb-4 flex items-center justify-center">
                            <FaRegClock />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Schedule a Session</h3>
                        <p className="text-gray-600 text-sm">
                            Pick a time that works for you and book a session directly with the provider.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 rounded-3xl shadow-lg p-8 flex flex-col items-center text-center transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
                        <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full text-4xl mb-4 flex items-center justify-center">
                            <FaCheckCircle />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Start Learning</h3>
                        <p className="text-gray-600 text-sm">
                            Attend the session, engage with the provider, and enhance your skills effectively.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
}
