import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useLoaderData, useParams } from "react-router";
import toast from "react-hot-toast";
import { FaEnvelope, FaUserTie, FaTag, FaUsers, FaStar } from "react-icons/fa";
import InfoBox from "../../Components/InfoBox";

export default function SkillDetailPage() {
  const cards = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [detailsCard, setDetailsCard] = useState({});
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    const currentCard = cards.find((card) => card?.skillId == id);
    setDetailsCard(currentCard);
  }, [cards, id]);

  const {
    image,
    skillName,
    description,
    providerName,
    providerEmail,
    price,
    rating,
    slotsAvailable,
    category,
  } = detailsCard || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("⚠️ Please fill out all fields!");
      return;
    }

    toast.success("🎉 Session booked successfully!");
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="max-w-7xl mx-auto my-16 px-6 lg:px-10 font-inter">
      <div className="relative bg-gradient-to-br from-white via-indigo-50 to-blue-100 rounded-3xl border border-indigo-100 shadow-lg hover:shadow-2xl hover:border-indigo-200 transition-all duration-500 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-10 p-8 md:p-10">

          {/* ===== Left Image Section ===== */}
          <div className="md:w-1/2  ounded-2xl">
            <img
              src={image}
              alt={skillName}
              className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700 ease-out shadow-lg"
            />

            

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
          </div>

          {/* ===== Right Content Section ===== */}
          <div className="md:w-1/2 flex flex-col justify-between space-y-3">
            {/* Title + Description */}
            <div>
              <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-700 to-blue-600 bg-clip-text text-transparent leading-snug mb-3">
                {skillName}
              </h1>
              <p className="text-gray-700 leading-relaxed text-[15px]">
                {description ||
                  "Master new skills through hands-on projects, expert mentorship, and engaging lessons designed to boost your career."}
              </p>
            </div>

            {/* Info Boxes */}
            <div className="grid grid-cols-2 gap-4 text-gray-800">
              <InfoBox icon={<FaUserTie />} title="Instructor" value={providerName} />
              <InfoBox icon={<FaEnvelope />} title="Email" value={providerEmail} />
              <InfoBox icon={<FaTag />} title="Category" value={category} />
              <InfoBox icon={<FaUsers />} title="Slots" value={slotsAvailable} />
            </div>

            {/* Price + Rating Section */}
            <div className="flex flex-col sm:flex-row items-center justify-between mt-8 bg-gradient-to-r from-indigo-50 via-blue-50 to-indigo-100 px-8 py-6 rounded-2xl border border-indigo-100 shadow-inner backdrop-blur-sm">
              {/* Rating */}
              <div className="flex items-center text-2xl font-semibold text-indigo-700">
                <FaStar className="text-yellow-500 text-3xl mr-2 drop-shadow-sm" />
                <span>{rating || "N/A"}</span>
              </div>

              {/* Price & Slots */}
              <div className="text-center sm:text-right mt-4 sm:mt-0">
                <p className="text-3xl font-extrabold text-indigo-800 drop-shadow-sm">
                  ${price}
                </p>
                <p className="text-sm text-gray-600">
                  Available Slots:{" "}
                  <span className="font-semibold text-indigo-700">
                    {slotsAvailable}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Book Session Form  */}
      <div className="mt-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 shadow-xl rounded-3xl p-10 md:p-14 border border-blue-100">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-10 flex items-center justify-center gap-2">
          <span className="text-indigo-600 text-4xl">📅</span> Book a Session
        </h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white/70 backdrop-blur-lg shadow-md rounded-2xl p-8 md:p-10 border border-gray-200 hover:shadow-lg transition-all duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-gray-700 font-semibold mb-2 ml-1 text-sm"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm text-gray-800 placeholder-gray-400 text-sm"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-gray-700 font-semibold mb-2 ml-1 text-sm"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm text-gray-800 placeholder-gray-400 text-sm"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-500 text-white px-10 py-3 rounded-xl font-bold text-sm md:text-base shadow-lg hover:shadow-indigo-300 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Submit Booking 🚀
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
