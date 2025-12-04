import React, { useEffect, useState } from "react";
import PropularSkill from "../../Components/PropularSkills/PropularSkill";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AllSkills() {
  const [cards, setCards] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");

  // Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/fake_data.json");
        const data = await res.json();
        setCards(data);
        setTimeout(() => {
          AOS.refreshHard();
        }, 300);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // AOS Init
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: true,
    });
  }, []);

  // Sorting Logic
  const sortedCards = [...cards].sort((a, b) =>
    sortOrder === "asc" ? a.rating - b.rating : b.rating - a.rating
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-6 md:py-12">
      
      {/* Section Header */}
      <div className="text-center mb-8" data-aos="fade-down">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-700">
          Explore Skills on <span className="text-purple-700">SkillSwap</span>
        </h2>
        <p className="text-indigo-600 mt-2 text-sm sm:text-base max-w-xl mx-auto px-3">
          Discover exciting skills shared by learners around the world.
          Learn, teach & grow together!
        </p>
      </div>

      {/* Filter Dropdown */}
      <div className="flex justify-center sm:justify-end mb-6" data-aos="fade-right">
        <select
          className="px-4 py-2 border border-indigo-400 rounded-md bg-white text-indigo-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 md:w-[220px] w-[200px]"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="desc">Rating: High to Low</option>
          <option value="asc">Rating: Low to High</option>
        </select>
      </div>

      {/* Card Grid */}
      <div className="grid gap-6 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {sortedCards.map((card, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="transition-transform"
          >
            <PropularSkill card={card} />
          </div>
        ))}
      </div>

    </div>
  );
}
