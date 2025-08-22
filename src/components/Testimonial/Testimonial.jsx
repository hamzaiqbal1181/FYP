import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Aisha Khan",
    text: "Specializes in art, culture, and shopping expeditions. Aisha can guide you through the best galleries and bustling bazaars.",
    img: "https://picsum.photos/101/101",
    contact: "+92 322 1122334",
  },
  {
    id: 1,
    name: "Hassan Ali",
    text: "Your go-to guide for food tours and experiencing Lahore's vibrant nightlife. Knows every top-rated and hidden food spot.",
    img: "https://picsum.photos/102/102",
    contact: "+92 322 1122334",
  },
  {
    id: 1,
    name: "Ali Raza",
    contact: "+92 322 1122334",
    text: "Expert in historical tours and uncovering the hidden stories of the Walled City. Passionate about architecture and local cuisine.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          {/* header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            {/* <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-500  ">
              Top Guiders
            </p> */}
            <h1 className="text-3xl font-bold mb-5">Meet Our Top Guides</h1>
            <p className="text-xs text-gray-500">
              {" "}
              Our guides are more than just experts; they are passionate
              storytellers who bring the history and culture of Lahore to life.
              Get to know the friendly faces who will make your journey
              unforgettable.
            </p>
          </div>

          {/* testimonial section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[800px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {TestimonialData.map(({ id, name, text, img, contact }) => {
                return (
                  <div key={id} className="my-6">
                    <div className=" relative flex flex-col justify-center items-center gap-2 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-100 bg-blue-150">
                      <img
                        src={img}
                        alt=""
                        className="rounded-full block mx-auto"
                      />
                      <h1 className="text-xl font-bold">{name}</h1>

                      <a
                        href={`tel:${contact}`}
                        className="text-sm font-semibold text-blue-600 hover:text-blue-800"
                      >
                        {contact}
                      </a>

                      <p className="text-gray-500 text-sm">{text}</p>
                      {/* <div className="mt-2">
                        <a
                          href={`tel:${contact}`}
                          className="text-sm font-semibold text-blue-600 hover:text-blue-800"
                        >
                          {contact}
                        </a>
                      </div> */}
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
