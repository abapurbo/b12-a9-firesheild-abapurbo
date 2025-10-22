import React from "react";
import { FaStar } from "react-icons/fa";

export default function PopularSkill({ card }) {
    const { image, skillName, rating, price } = card || {}
    return (
        <div className="card bg-white border border-gray-100 shadow-md hover:shadow-xl rounded-xl overflow-hidden transition-all duration-300">
            {/* Image */}
            <figure className="h-48 w-full overflow-hidden">
                <img
                    src={image}
                    alt="Skill"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
            </figure>

            {/* Content */}
            <div className="card-body p-5 space-y-1">
                {/* Title */}
                <h2 className="card-title text-2xl font-semibold text-gray-800 transition-colors duration-300 hover:text-indigo-600 cursor-pointer">
                    {skillName}
                </h2>

                {/* Rating & Price */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-yellow-500">
                        <FaStar className="text-2xl bg-amber-100 p-1 rounded-xl" />
                        <span className="text-gray-700 text-lg font-medium">{rating}</span>
                    </div>
                    <div className="text-green-500 font-semibold text-2xl">{price}</div>
                </div>
                {/* Button */}
                <div className="card-actions pt-2">
                    <button className="btn btn-sm w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white border-none rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
}
