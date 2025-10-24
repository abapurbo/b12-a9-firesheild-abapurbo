import React from "react";

export default function InfoBox({ icon, title, value }) {
  return (
    <div
      className="bg-white/80 backdrop-blur-md md:p-4 p-6 box-border rounded-xl 
                 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 
                 warp-break-words overflow-hidden text-ellipsis"
    >
      <p className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-1 warp-break-words">
        {icon} {title}
      </p>
      <p className="text-gray-700 break-words whitespace-normal ">
        {value || "N/A"}
      </p>
    </div>
  );
}
