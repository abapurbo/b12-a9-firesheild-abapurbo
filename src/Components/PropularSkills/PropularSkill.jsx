import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

export default function PopularSkill({ card }) {
    const { skillId, image, skillName, rating, price, providerName } = card || {};

    return (

        <div>
            <div className="card cursor-pointer bg-base-100 w-full  max-w-[346px] h-[400px]  shadow-xl p-3.5 transition hover:scale-95 duration-500">
                <figure className="flex-1">
                    <img className='w-full h-[200px]  object-center'
                        src={image}
                        alt={skillName} />
                </figure>

                <div className="flex-1 flex flex-col justify-start ">
                    <div className='flex-1 mt-3'>
                        <h2 className="card-title">{skillName}</h2>
                        <p className="text-gray-400">{providerName}</p>
                    </div>
                    {/* Rating & Price */}
                    <div className=" flex items-center justify-between mt-3">
                        <div className="flex items-center gap-1 text-yellow-500">
                            <FaStar className="text-2xl bg-amber-100 p-1 rounded-xl" />
                            <span className="text-gray-700 text-lg font-medium">{rating}</span>
                        </div>
                        <div className="text-green-500 font-semibold text-xl">${price}</div>
                    </div>
                    <div className="card-actions justify-between mt-4 ">
                        <Link to={`/skillDetailsPage/${skillId}`} className="btn btn-soft btn-primary text-sm">
                            View Details
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    );
}
