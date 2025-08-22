import React from "react";
import TravelImg from "../../assets/travelbox.png";
import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";

const Banner = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="container py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* Image section */}
            <div>
              <img
                src={TravelImg}
                alt=""
                className="max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"
              />
            </div>
            {/* Text content section */}
            <div>
              <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
                Explore all hidden gem of Lahore with us!
              </h1>
              <p
                data-aos="fade-up"
                className="text-sm text-gray-500 tracking-wide leading-8"
              >
                {" "}
                Lahore is a city brimming with history, culture, and
                unforgettable flavors. From its ancient forts to its bustling
                food streets, there are countless treasures to uncover. We
                handle all the planning—from your flight and hotel to your local
                food adventures—so you can enjoy a seamless and memorable trip.
                Your perfect Lahore journey starts here.
              </p>
              {/* <div>
                <div className="grid grid-cols-2 gap-6 mt-6">
                  <div className="flex items-center gap-4">
                    <MdFlight className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                    <p>Flight</p>
                    <MdOutlineLocalHotel className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                    <p>Hotel</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <IoIosWifi className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                    <p>Wi-fi</p>
                    <IoFastFoodSharp className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                    <p>Foods</p>
                  </div>
                </div>
              </div> */}

              <div className="grid grid-cols-2 gap-6 mt-6">
                <div className="flex items-center gap-4">
                  <MdFlight className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                  <p>Flight</p>
                </div>
                <div className="flex items-center gap-4">
                  <MdOutlineLocalHotel className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                  <p>Hotel</p>
                </div>
                <div className="flex items-center gap-4">
                  <IoIosWifi className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                  <p>Wi-fi</p>
                </div>
                <div className="flex items-center gap-4">
                  <IoFastFoodSharp className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                  <p>Foods</p>
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
