import React from "react";
import Marquee from "react-fast-marquee";
import { FaRocket, FaPalette, FaStar, FaComments, FaLock } from "react-icons/fa";

export default function MarqueeNotice() {
  return (
    <div className="bg-gradient-to-r from-indigo-50 via-white to-purple-50 py-4 border-y border-indigo-100 shadow-sm">
      <Marquee speed={100} pauseOnHover gradient={false}>
        <div className="flex items-center gap-10 text-gray-700 font-medium text-base sm:text-lg">
          
          <span className="flex items-center gap-2">
            <FaRocket className="text-indigo-600" />
            <span>New Skill Added:</span>
            <span className="text-indigo-900 font-semibold">
              “Photography Basics by Nabila Khan”
            </span>
          </span>

          <span className="flex items-center gap-2">
            <FaPalette className="text-purple-600" />
            <span>Explore Category:</span>
            <span className="text-purple-800 font-semibold">“Art & Design”</span>
          </span>

          <span className="flex items-center gap-2">
            <FaStar className="text-yellow-500" />
            <span>Connect with</span>
            <span className="text-indigo-900 font-semibold">200+ Mentors</span>
          </span>

          <span className="flex items-center gap-2">
            <FaComments className="text-pink-500" />
            <span>Learn. Teach. Grow.</span>
            <span className="text-purple-800 font-semibold">Together!</span>
          </span>

          <span className="flex items-center gap-2">
            <FaLock className="text-indigo-600" />
            <span>Login now to unlock</span>
            <span className="text-indigo-900 font-semibold">exclusive sessions!</span>
          </span>
        </div>
      </Marquee>
    </div>
  );
}
