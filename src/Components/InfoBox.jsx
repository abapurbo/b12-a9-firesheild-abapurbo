import React from "react";

export default function InfoBox({ icon, title, value }) {
    return <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
        <p className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-1">
            {icon} {title}
        </p>
        <p className="text-gray-700">{value || "N/A"}</p>
    </div>
}
