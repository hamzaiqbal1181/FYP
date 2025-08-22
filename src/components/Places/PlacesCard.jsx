import React from "react";
import { IoLocationSharp } from "react-icons/io5";

// --- UPDATED: The component now receives 'images' (an array) instead of 'img' ---
const PlacesCard = ({
  images, // This is now an array of images
  title,
  location,
  description,
  type,
  onLocationClick,
}) => {
  return (
    <div className="shadow-lg transition-all duration-500 hover:shadow-xl cursor-pointer bg-white rounded-lg flex flex-col">
      <div className="overflow-hidden rounded-t-lg">
        {/* --- FIX: Use the first image from the 'images' array for the card --- */}
        <img
          src={images[0]} // We display the first image in the array
          alt={title}
          className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
        />
      </div>
      <div className="space-y-2 p-3 flex flex-col flex-grow">
        <h1 className="line-clamp-1 font-bold text-xl">{title}</h1>
        <div
          className="flex items-center gap-2 opacity-70 cursor-pointer hover:opacity-100 transition-opacity"
          onClick={onLocationClick}
        >
          <IoLocationSharp className="text-sky-600" />
          <span>{location}</span>
        </div>
        <p className="line-clamp-2 flex-grow">{description}</p>
        <div className="flex items-center justify-between border-t-2 y-3 !mt-3 pt-3">
          <div className="opacity-70">
            <p>{type}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacesCard;
