import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
// --- NEW: Import animation tools from Framer Motion ---
import { motion, AnimatePresence } from "framer-motion";
import Location from "../location/Location";

// --- Keep all your image imports ---
import ImgQilla from "../../assets/bestplaces/qilla.jpg";
import ImgMinar from "../../assets/bestplaces/minar.jpg";
import ImgMasjid from "../../assets/bestplaces/masjid.jpg";
import ImgKhan from "../../assets/bestplaces/khan.jpg";
import ImgStation from "../../assets/bestplaces/station.jpg";
import ImgDehli from "../../assets/bestplaces/dehli.jpg";
import ImgAnarkali from "../../assets/places/anarkali.jpg";
import ImgIchra from "../../assets/places/ichara.jpg";
import ImgGawal from "../../assets/places/gawal.jpg";
import ImgLakshmi from "../../assets/places/lakshmi.jpg";

// --- Your new, enhanced data array from Step 2 goes here ---
// ... (paste the updated array from above)
// Add a rating and description to each object
const topRatedPlaces = [
  {
    id: "bp1",
    img: ImgQilla,
    title: "Lahore Fort",
    location: "Lahore",
    // rating: 4.8,
    description:
      "The Lahore Fort is a giant storybook of red sandstone and white marble. Built over centuries, primarily by Mughal emperors, it's a breathtaking mix of powerful defensive walls and exquisite palaces. From Akbar’s imposing gates to Shah Jahan’s shimmering Sheesh Mahal (Palace of Mirrors), it showcases imperial power and artistry. The Lahore Fort is a giant storybook of red sandstone and white marble. Built over centuries, primarily by Mughal emperors, it's a breathtaking mix of powerful defensive walls and exquisite palaces.",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.6660646360588!2d74.31284847442842!3d31.588204043789645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b622e82346f%3A0x35bdc71e324cb4ec!2sLahore%20Fort!5e0!3m2!1sen!2s!4v1753000472161!5m2!1sen!2s",
  },
  {
    id: "bp2",
    img: ImgMinar,
    title: "Minar-e-Pakistan",
    location: "Lahore",
    // rating: 4.7,
    description:
      "Minar-e-Pakistan, located in Lahore, commemorates the Lahore Resolution of 1940, when the demand for a separate nation for Muslims in India was made. This iconic tower, built in 1966, stands 70 meters tall and showcases a blend of Islamic and modern architectural styles. Surrounded by a beautiful park, Minar-e-Pakistan serves as a national symbol of pride and unity for Pakistanis, attracting countless visitors each year who come to admire its significance and beauty.",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.531518342418!2d74.3082833151152!3d31.59251848137356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b5a50e58ebd%3A0x8671b12b5b3e7789!2sMinar-e-Pakistan!5e0!3m2!1sen!2s!4v1672584000000!5m2!1sen!2s",
  },
  {
    id: "bp3",
    img: ImgMasjid,
    title: "Badshahi Mosque",
    location: "Lahore",
    // rating: 4.9,
    description:
      "The Badshahi Mosque, built in 1673, is a grand Mughal masterpiece located in Lahore, Pakistan. It is renowned for its stunning red sandstone and intricate marble inlay, representing the zenith of Mughal architecture. With a capacity to accommodate over 55,000 worshippers, it's one of the largest mosques in the world and a symbol of religious and cultural heritage. The mosque features a beautiful courtyard, soaring minarets, and rich history, making it a must-visit landmark.",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.494793853924!2d74.31138631511514!3d31.59368298137311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b5c697a5b3d%3A0x2e08a54d5571a44c!2sBadshahi%20Mosque!5e0!3m2!1sen!2s!4v1672585000002!5m2!1sen!2s",
  },
  // ... add rating and description to the other 3 places as well
  {
    id: "bp4",
    img: ImgKhan,
    title: "Wazir Khan Mosque",
    location: "Lahore",
    // rating: 4.8,
    description:
      "AOften called a mole on the cheek of Lahore, the Wazir Khan Mosque is a jewel box of vibrant color. Built in the 17th century during Emperor Shah Jahan's reign by his governor, Wazir Khan, it is a masterpiece of Mughal architecture. Its most unique feature is the breathtaking kashi-kari (faience tile work) that covers nearly every surface, inside and out. These intricate floral and calligraphic mosaics make it one of the most ornately decorated mosques in the world.",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.8454874606728!2d74.32103957442826!3d31.583284744033115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b68076b3149%3A0x5c8d9d4d735a88e9!2sWazir%20Khan%20Mosque!5e0!3m2!1sen!2s!4v1753105803630!5m2!1sen!2s",
  },
  {
    id: "bp5",
    img: ImgStation,
    title: "Railway Station",
    location: "Lahore",
    // rating: 4.5,
    description:
      "Lahore Railway Station, built in 1860, is a historical landmark showcasing stunning Indo-Saracenic architecture. This bustling hub connects travelers to various destinations across Pakistan. The station features a remarkable clock tower and vibrant platforms, reflecting the city’s cultural heritage. Its location near the heart of Lahore makes it accessible, attracting both locals and tourists. As one of the busiest railway stations, it plays a pivotal role in the transportation network of the region.",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.044521807565!2d74.33323707442794!3d31.577826944303247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191bcc2ba725f3%3A0x4d91e7dc439d2403!2sRailway%20Station%20Lahore!5e0!3m2!1sen!2s!4v1753105880298!5m2!1sen!2s",
  },
  {
    id: "bp6",
    img: ImgDehli,
    title: "Dehli Gate",
    location: "Lahore",
    // rating: 4.6,
    description:
      "Delhi Gate in Lahore, a historical monument, dates back to the Mughal era. It served as a crucial entry point to the city, linking the Walled City with the main road. The gate features stunning Mughal architecture, with intricate carvings and large bastions, reflecting the era's grandeur. Today, it stands as a symbol of Lahore's rich history and cultural heritage, attracting numerous visitors who admire its beauty and significance.",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.8861625845557!2d74.32384147442818!3d31.58216944408833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b68276d716b%3A0xc6aec936de69f79f!2sDehli%20Gate!5e0!3m2!1sen!2s!4v1753106058768!5m2!1sen!2s",
  },
  {
    id: "bp7",
    img: ImgAnarkali,
    title: "Anarkali Bazaar",
    location: "Lahore",
    // rating: 4.6,
    description:
      "Anarkali Bazaar in Lahore has a rich history and is known for its vibrant culture. It offers a unique shopping experience with a variety of goods, from traditional clothing to exquisite handicrafts. This bustling market, named after the legendary Anarkali, provides a glimpse into the city's heritage. Visitors enjoy the lively atmosphere, delicious street food, and the chance to interact with local vendors. Anarkali Bazaar captures the essence of Lahore's charm and is a must-visit destination",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13597.392546963783!2d74.30328638868437!3d31.56949976925893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191ca80557d915%3A0x18fe189fe4af33!2sAnarkali%20Bazaar%20Lahore%2C%2054000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1753106268069!5m2!1sen!2s",
  },
  {
    id: "bp8",
    img: ImgIchra,
    title: "Ichra Bazaar",
    location: "Lahore",
    // rating: 4.6,
    description:
      "Ichhra Bazaar in Lahore has a rich history and is a vibrant marketplace known for its unique blend of traditional and contemporary items. Dating back to the Mughal era, the bazaar is famous for textiles, handicrafts, and street food that captures the essence of local culture. With its bustling atmosphere, Ichhra Bazaar attracts both locals and tourists, offering an immersive shopping experience that reflects Lahore's heritage.",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.6942369248895!2d74.31535997442582!3d31.53255684654203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904997f3e5e51%3A0xa42619546060c75c!2sIchhra%20Bazar!5e0!3m2!1sen!2s!4v1753106573717!5m2!1sen!2s",
  },
  {
    id: "bp9",
    img: ImgLakshmi,
    title: "Lakshmi Chowk",
    location: "Lahore",
    // rating: 4.6,
    description:
      "Lakshmi Chowk in Lahore is a vibrant historical marketplace known for its cultural significance and culinary delights. Established during British colonial rule, it has evolved into a lively hub for shopping and dining. The area is characterized by its unique blend of traditional and modern architecture, drawing both locals and tourists. Visitors can explore a variety of shops, food stalls, and eateries, making it a popular destination for authentic Pakistani cuisine and experience local culture.",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.4348572454123!2d74.32180602442747!3d31.56712094483289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b4e6cccafe1%3A0xe5445bb2045533fb!2sLakshmi%20Chowk%20Lahore!5e0!3m2!1sen!2s!4v1753107348994!5m2!1sen!2s",
  },
  {
    id: "bp10",
    img: ImgGawal,
    title: "Gawalmandi Food Street",
    location: "Lahore",
    // rating: 4.6,
    description:
      "Lakshmi Chowk in Lahore is a vibrant historical marketplace known for its cultural significance and culinary delights. Established during British colonial rule, it has evolved into a lively hub for shopping and dining. The area is characterized by its unique blend of traditional and modern architecture, drawing both locals and tourists. Visitors can explore a variety of shops, food stalls, and eateries, making it a popular destination for authentic Pakistani cuisine and experience local culture.",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.2253720513427!2d74.31896387442775!3d31.572867044548538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b5aece1ce5d%3A0xf3b78889d8efd081!2sGawalmandi%20Food%20St%2C%20Gawalmandi%2C%20Lahore%2C%2054000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1753107252673!5m2!1sen!2s",
  },
];

const BestPlaces = () => {
  // --- NEW: State to track which place is currently active/featured ---
  const [activePlace, setActivePlace] = useState(topRatedPlaces[0]);

  return (
    <div className="bg-gray-100 text-black py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Top Rated Destinations
          </h2>
          <p className="text-gray-500 mt-2">
            Click on a place to see more details.
          </p>
        </div>

        {/* --- NEW: Main gallery layout --- */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Featured Display */}
          <div className="flex flex-col gap-4">
            <AnimatePresence mode="wait">
              <motion.img
                key={activePlace.id} // The key tells Framer Motion to re-animate when it changes
                src={activePlace.img}
                alt={activePlace.title}
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-3xl font-bold">{activePlace.title}</h3>
              <div className="flex items-center gap-4 text-gray-600 mt-2">
                <div className="flex items-center gap-1">
                  <IoLocationSharp className="text-sky-600" />
                  <span>{activePlace.location}</span>
                </div>
                {/* <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <span className="font-bold">{activePlace.rating}</span>
                </div> */}
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed">
                {activePlace.description}
              </p>
            </motion.div>
          </div>

          {/* Right Column: Thumbnail List */}
          <div className="flex flex-col gap-4 max-h-[600px] overflow-y-auto pr-2">
            {topRatedPlaces.map((place) => (
              <motion.div
                key={place.id}
                onClick={() => setActivePlace(place)} // --- NEW: Click handler to change the active place ---
                className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 border-2
                  ${
                    activePlace.id === place.id
                      ? "bg-white shadow-lg border-sky-500" // Style for the active thumbnail
                      : "bg-gray-200 hover:bg-white border-transparent" // Style for inactive thumbnails
                  }`}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={place.img}
                  alt={place.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h4 className="font-bold text-lg">{place.title}</h4>
                  <p className="text-sm text-gray-600">{place.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-20">
          <Location place={activePlace} />
        </div>
      </div>
    </div>
  );
};

export default BestPlaces;
