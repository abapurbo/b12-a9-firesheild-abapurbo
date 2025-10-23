import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

export default function PopularSkill({ card }) {
    const {skillId, image, skillName, rating, price, providerName } = card || {};

    return (
        <div className="card bg-white border border-gray-100 shadow-md hover:shadow-xl rounded-xl overflow-hidden transition-all duration-300">
            {/* Image */}
            <figure className="h-48 w-full overflow-hidden">
                <img
                    src={image}
                    alt={skillName || "Skill"}
                    className="w-full h-full object-center hover:scale-105 transition-transform duration-300"
                />
            </figure>

            {/* Content */}
            <div className="card-body p-5 space-y-1">
                {/* Skill Name */}
                <h2 className="card-title flex-1 md:text-xl text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-indigo-600 cursor-pointer">
                    {skillName}
                </h2>

                {/* Provider Name */}
                <p className="text-gray-600 italic text-sm mt-[-6px] mb-2">
                    <span className="font-semibold text-gray-400">{providerName}</span>
                </p>

                {/* Rating & Price */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-yellow-500">
                        <FaStar className="text-2xl bg-amber-100 p-1 rounded-xl" />
                        <span className="text-gray-700 text-lg font-medium">{rating}</span>
                    </div>
                    <div className="text-green-500 font-semibold text-2xl">${price}</div>
                </div>

                {/* Button */}
                <div className="card-actions justify-end pt-2">
                    <Link to={`/skillDetailsPage/${skillId}`} className="btn  btn-soft btn-primary">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
}
