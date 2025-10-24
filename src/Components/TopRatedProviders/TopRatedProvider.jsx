import React from "react";
import { FaStar } from "react-icons/fa";

export default function TopRatedProvider({ topProvider }) {
    return <div>
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 flex flex-col items-center text-center" >
            <img
                src={topProvider.img}
                alt={topProvider.name}
                className="w-24 h-24 rounded-full mb-4 object-cover shadow-md"
            />
            <h3 className="text-xl font-semibold text-gray-800">{topProvider.name}</h3>
            <p className="text-gray-500 text-sm">{topProvider.skill}</p>
            <div className="flex items-center mt-2 text-yellow-500">
                <FaStar className="mr-1" /> <span className="font-medium">{topProvider.rating}</span>
            </div>
            <p className="text-gray-400 text-sm mt-2">{topProvider.email}</p>
        </div>
    </div>;
}
