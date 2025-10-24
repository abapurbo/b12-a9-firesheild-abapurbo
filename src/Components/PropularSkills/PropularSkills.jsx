import React, { useEffect, useState } from "react";
import PropularSkill from "./PropularSkill";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function PopularSkills() {
  const [cards, setCards] = useState([]);
  const [showAll, setShowAll] = useState(false)

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/fake_data.json');
        const data = await res.json();
        setCards(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);

  // Refresh AOS when cards update (dynamic content)
  useEffect(() => {
    AOS.refresh();
  }, [cards]);

  return (
    <section className="py-20">
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
      <div className="container mx-auto md:px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {
            (showAll ? cards : cards.slice(0, 8)).map((card, index) => (
              <div key={index} >
                <PropularSkill card={card} />
              </div>
            ))
          }
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-16">
        <button
          className="btn btn-outline btn-primary"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Explore All Skills"}
        </button>

      </div>
    </section>
  );
}
