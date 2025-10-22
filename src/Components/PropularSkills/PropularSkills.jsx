import React, { useEffect, useState } from "react";
import PropularSkill from "./PropularSkill";

export default function PopularSkills() {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        const url = '/fake_data.json'
        const fetchData = async () => {
            try {

                const res = await fetch(url);
                const data = await res.json();
                setCards(data)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return (
        <section className="py-20 ">
            {/* Section Header */}
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                    Most <span className="text-indigo-600">Popular Skills</span>
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                    Discover popular skills offered by local mentors.
                    From music and coding to fitness and art — learn, teach, and connect with your community today!
                </p>

            </div>

            {/* Skills Grid */}
            <div className="container mx-auto px-4">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                   {
                    cards.map((card,index)=><PropularSkill key={index} card={card}></PropularSkill>)
                   }
                </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
                <button className="btn bg-gradient-to-r from-indigo-600 to-blue-500 text-white border-none rounded-full px-10 py-3 text-lg font-medium shadow-md hover:scale-105 hover:shadow-lg transition-all">
                    Explore All Skills
                </button>
            </div>
        </section>
    );
}
