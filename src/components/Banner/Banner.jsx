import React from "react";
import TravelImg from "../../assets/travelbox.png";
// import { MdFlight } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { GiMultiDirections } from "react-icons/gi";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";

const Banner = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Image section */}
            <div className="flex justify-center">
              <img
                src={TravelImg}
                alt="Travel"
                className="max-w-[350px] w-full h-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover rounded-xl"
              />
            </div>
            {/* Text content section */}
            <div className="flex flex-col justify-center items-start">
              <h1
                data-aos="fade-up"
                className="text-2xl md:text-4xl font-bold mb-4 text-gray-800"
              >
                Explore all hidden gem of Lahore with us!
              </h1>
              <p
                data-aos="fade-up"
                className="text-sm md:text-base text-gray-500 tracking-wide leading-7 mb-6"
              >
                Lahore is a city brimming with history, culture, and
                unforgettable flavors. From its ancient forts to its bustling
                food streets, there are countless treasures to uncover. We
                handle all the planning—from your flight and hotel to your local
                food adventures—so you can enjoy a seamless and memorable trip.
                Your perfect Lahore journey starts here.
              </p>
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="flex items-center gap-3">
                  <GiMultiDirections className="text-3xl h-10 w-10 shadow-sm p-2 rounded-full bg-violet-100 dark:bg-violet-400" />
                  <p className="text-base font-medium">Direction</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaShoppingCart className="text-3xl h-10 w-10 shadow-sm p-2 rounded-full bg-orange-100 dark:bg-orange-400" />
                  <p className="text-base font-medium">Shop</p>
                </div>
                <div className="flex items-center gap-3">
                  <IoIosWifi className="text-3xl h-10 w-10 shadow-sm p-2 rounded-full bg-violet-100 dark:bg-violet-400" />
                  <p className="text-base font-medium">Wi-fi</p>
                </div>
                <div className="flex items-center gap-3">
                  <IoFastFoodSharp className="text-3xl h-10 w-10 shadow-sm p-2 rounded-full bg-orange-100 dark:bg-orange-400" />
                  <p className="text-base font-medium">Foods</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
