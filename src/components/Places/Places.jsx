// src/components/Places/Places.jsx

import React, { useState } from "react";
import PlaceCategorySection from "./PlaceCategorySection";
// import PlacePopup from "./PlacePopup";
import PlaceDetailPopup from "./PlaceDetailPopup";
import MapPopup from "./MapPopup";

// --- ALL YOUR IMAGE IMPORTS ---
import Img1 from "../../assets/places/fort.jpg";
import Img2 from "../../assets/places/Minar-e-Pakistan.jpg";
import Img3 from "../../assets/places/mosque.jpg";
import Img4 from "../../assets/places/shalimar.jpg";
import Img5 from "../../assets/places/sheesh.jpg";
import Img6 from "../../assets/places/wazir.jpg";
import Img7 from "../../assets/places/railway.jpg";
import Img8 from "../../assets/places/zoo.jpg";
import Img9 from "../../assets/places/hammam.jpg";
import Img10 from "../../assets/places/gate.jpg";
import Img11 from "../../assets/places/museum.jpg";
import Img12 from "../../assets/places/bagh.jpg";
import Img13 from "../../assets/places/anarkali.jpg";
import Img14 from "../../assets/places/liberty.jpg";
import Img15 from "../../assets/places/pakages.jpg";
import Img16 from "../../assets/places/emporium.jpg";
import Img17 from "../../assets/places/fotress.jpg";
import Img18 from "../../assets/places/ichara.jpg";
import Img19 from "../../assets/places/shahalem.jpg";
import Img20 from "../../assets/places/amanah.jpg";
import Img21 from "../../assets/places/emporium.jpg";
import Img22 from "../../assets/places/anarkali.jpg";
import Img23 from "../../assets/places/mall.jpg";
import Img24 from "../../assets/places/yblock.jpg";
import Img25 from "../../assets/places/gawal.jpg";
import Img26 from "../../assets/places/fortfood.jpg";
import Img27 from "../../assets/places/lakshmi.jpg";
import Img28 from "../../assets/places/butt.jpg";
import Img29 from "../../assets/places/gawal.jpg";
import Img30 from "../../assets/places/alfazal.jpg";
import Img31 from "../../assets/places/hareesa.jpg";
import Img32 from "../../assets/places/goga.jpg";
import Img33 from "../../assets/places/waris.jpg";
import Img34 from "../../assets/places/yasir.jpg";
import Img35 from "../../assets/places/kulfa.jpg";
import Img36 from "../../assets/places/arif.jpg";

// --- COMPLETE DATA ARRAY WITH ALL 36 ITEMS AND MAP URLs ---
const AllPlacesData = [
  // --- Historical Places (12) ---
  {
    id: 1,
    images: [Img1, Img5, Img6],
    title: "Lahore Fort",
    location: "Lahore",
    description:
      "The Lahore Fort is a giant storybook of red sandstone and white marble. Built over centuries, primarily by Mughal emperors, it's a breathtaking mix of powerful defensive walls and exquisite palaces. From Akbar’s imposing gates to Shah Jahan’s shimmering Sheesh Mahal (Palace of Mirrors), it showcases imperial power and artistry. The Lahore Fort is a giant storybook of red sandstone and white marble. Built over centuries, primarily by Mughal emperors, it's a breathtaking mix of powerful defensive walls and exquisite palaces.",
    type: "Historical",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.6660646360588!2d74.31284847442842!3d31.588204043789645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b622e82346f%3A0x35bdc71e324cb4ec!2sLahore%20Fort!5e0!3m2!1sen!2s!4v1753000472161!5m2!1sen!2s",
  },
  {
    id: 2,
    images: [Img2, Img5, Img6],
    title: "Minar-e-Pakistan",
    location: "Lahore",
    description:
      "Minar-e-Pakistan, located in Lahore, commemorates the Lahore Resolution of 1940, when the demand for a separate nation for Muslims in India was made. This iconic tower, built in 1966, stands 70 meters tall and showcases a blend of Islamic and modern architectural styles. Surrounded by a beautiful park, Minar-e-Pakistan serves as a national symbol of pride and unity for Pakistanis, attracting countless visitors each year who come to admire its significance and beauty.",
    type: "Historical",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.531518342418!2d74.3082833151152!3d31.59251848137356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b5a50e58ebd%3A0x8671b12b5b3e7789!2sMinar-e-Pakistan!5e0!3m2!1sen!2s!4v1672584000000!5m2!1sen!2s",
  },
  {
    id: 3,
    images: [Img3, Img2, Img6],
    title: "Badshahi Mosque",
    location: "Lahore",
    description:
      "The Badshahi Mosque, built in 1673, is a grand Mughal masterpiece located in Lahore, Pakistan. It is renowned for its stunning red sandstone and intricate marble inlay, representing the zenith of Mughal architecture. With a capacity to accommodate over 55,000 worshippers, it's one of the largest mosques in the world and a symbol of religious and cultural heritage. The mosque features a beautiful courtyard, soaring minarets, and rich history, making it a must-visit landmark.",
    type: "Historical",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.494793853924!2d74.31138631511514!3d31.59368298137311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b5c697a5b3d%3A0x2e08a54d5571a44c!2sBadshahi%20Mosque!5e0!3m2!1sen!2s!4v1672585000002!5m2!1sen!2s",
  },
  {
    id: 4,
    images: [Img4, Img5, Img6],
    title: "Shalimar Garden",
    location: "Lahore",
    description:
      "Shalimar Garden in Lahore, built during the Mughal era, is a stunning example of Persian garden design. Established in the 17th century by Emperor Shah Jahan, it features magnificent terraced levels, flowing water channels, and vibrant flora. The garden symbolizes the grandeur of Mughal architecture and serves as a peaceful retreat. Its historical significance and beauty attract numerous visitors each year, making it a cherished heritage site.",
    type: "Historical",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28000.05080311178!2d77.30076702370853!3d28.689456642289663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfa5397785fe9%3A0x11455fb0396b0f12!2sShalimar%20Garden%2C%20Sahibabad%2C%20Ghaziabad%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2s!4v1753105544560!5m2!1sen!2s",
  },
  {
    id: 5,
    images: [Img5, Img3, Img6],
    title: "Sheesh Mehal",
    location: "Lahore",
    description:
      "Sheesh Mehal in Lahore, also known as the Sheesh Mahal, is a stunning example of Mughal architecture. It was constructed in the 17th century for the Mughal Emperor Shah Jahan. The palace is adorned with intricate mirror work, reflecting beautiful patterns and designs. It served as a serenity retreat for the royal family, showcasing the grandeur of its time. Its unique beauty and historical significance make Sheesh Mehal a captivating destination for visitors today.",
    type: "Historical",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108755.28823329898!2d74.1813447625!3d31.589939599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b628a9a44bf%3A0x7a342a01b1e8348a!2sSheesh%20Mahal%20Lahore!5e0!3m2!1sen!2s!4v1753105711085!5m2!1sen!2s",
  },
  {
    id: 6,
    images: [Img6, Img11, Img12],
    title: "Wazir Khan Mosque",
    location: "Lahore",
    description:
      "Often called a mole on the cheek of Lahore, the Wazir Khan Mosque is a jewel box of vibrant color. Built in the 17th century during Emperor Shah Jahan's reign by his governor, Wazir Khan, it is a masterpiece of Mughal architecture. Its most unique feature is the breathtaking kashi-kari (faience tile work) that covers nearly every surface, inside and out. These intricate floral and calligraphic mosaics make it one of the most ornately decorated mosques in the world.",
    type: "Historical",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.8454874606728!2d74.32103957442826!3d31.583284744033115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b68076b3149%3A0x5c8d9d4d735a88e9!2sWazir%20Khan%20Mosque!5e0!3m2!1sen!2s!4v1753105803630!5m2!1sen!2s",
  },
  {
    id: 7,
    images: [Img7, Img6, Img9],
    title: "Railway Station",
    location: "Lahore",
    description:
      "Lahore Railway Station, built in 1860, is a historical landmark showcasing stunning Indo-Saracenic architecture. This bustling hub connects travelers to various destinations across Pakistan. The station features a remarkable clock tower and vibrant platforms, reflecting the city’s cultural heritage. Its location near the heart of Lahore makes it accessible, attracting both locals and tourists. As one of the busiest railway stations, it plays a pivotal role in the transportation network of the region.",
    type: "Historical",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.044521807565!2d74.33323707442794!3d31.577826944303247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191bcc2ba725f3%3A0x4d91e7dc439d2403!2sRailway%20Station%20Lahore!5e0!3m2!1sen!2s!4v1753105880298!5m2!1sen!2s",
  },
  {
    id: 8,
    images: [Img8, Img5, Img2],
    title: "Lahore Zoo",
    location: "Lahore",
    description:
      "Zoo Lahore, established in 1872, is one of the oldest zoos in the world, located in Lahore, Pakistan. It covers 38 acres and houses over 1,500 animals from various species. The zoo aims to promote conservation and education, providing an enjoyable experience for visitors. With attractions like the elephant pond and children's petting area, it serves as an engaging venue for families and wildlife enthusiasts.",
    type: "Historical",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.829017105568!2d74.32340257442691!3d31.55630674536783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904b3cdb34b8f%3A0xf51bccc5e247d137!2sLahore%20Zoo!5e0!3m2!1sen!2s!4v1753105939964!5m2!1sen!2s",
  },
  {
    id: 9,
    images: [Img9, Img5, Img3],
    title: "Shahi Hammam",
    location: "Lahore",
    description:
      "Shahi Hammam in Lahore, a historic Mughal bathhouse, showcases exquisite architecture and intricate tile work, reflecting the grandeur of the Mughal era. Established in the 16th century, it served as a lavish relaxation site for royalty. This unique structure features heated water systems, beautifully decorated domes, and serene ambiance, making it a significant cultural landmark. Today, Shahi Hammam stands as a testament to Lahore's rich heritage, attracting visitors who admire its beauty and historical importance.",
    type: "Historical",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.8886279232174!2d74.32342782442822!3d31.582101844091614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b428ebedb6d%3A0x655467c2c3391be9!2sH8JG%2BR98%20Shahi%20Hammam%2C%20Akbari%20Mandi%20Walled%20City%20of%20Lahore%2C%20Lahore%2C%2054000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1753105993579!5m2!1sen!2s",
  },
  {
    id: 10,
    images: [Img10, Img5, Img6],
    title: "Dehli Gate",
    location: "Lahore",
    description:
      "Delhi Gate in Lahore, a historical monument, dates back to the Mughal era. It served as a crucial entry point to the city, linking the Walled City with the main road. The gate features stunning Mughal architecture, with intricate carvings and large bastions, reflecting the era's grandeur. Today, it stands as a symbol of Lahore's rich history and cultural heritage, attracting numerous visitors who admire its beauty and significance.",
    type: "Historical",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.8861625845557!2d74.32384147442818!3d31.58216944408833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b68276d716b%3A0xc6aec936de69f79f!2sDehli%20Gate!5e0!3m2!1sen!2s!4v1753106058768!5m2!1sen!2s",
  },
  {
    id: 11,
    images: [Img11, Img15, Img16],
    title: "Lahore Museum",
    location: "Lahore",
    description:
      "The Lahore Museum, established in 1865, boasts an extensive collection showcasing Pakistan's rich history, artifacts, and art. Its stunning architecture and diverse exhibits attract history enthusiasts and tourists alike. Highlights include Gandhara sculptures, Mughal art, and traditional textiles, all reflecting the region's cultural heritage.",
    type: "Historical",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.3885380080524!2d74.30552197442746!3d31.568391544770094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191ca8f5a906f1%3A0xc5dad8adc056fa92!2sLahore%20Museum!5e0!3m2!1sen!2s!4v1753106118949!5m2!1sen!2s",
  },
  {
    id: 12,
    images: [Img12, Img15, Img26],
    title: "Bagh-e-Jinnah",
    location: "Lahore",
    description:
      "Bagh-e-Jinnah, located in Lahore, is a historic park famous for its vibrant gardens and rich history. Established during British colonial rule, it served as a recreational space for locals and visitors alike. The park is home to numerous historical monuments, including the Allama Iqbal Memorial, which honors the famous poet and philosopher. Its lush landscapes and serene atmosphere make it a perfect place for relaxation and cultural gatherings.",
    type: "Historical",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.9394922202723!2d74.3280749744268!3d31.55327514551772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904b76ab6ca9b%3A0x8adb100a4d2c6370!2sBagh-e-Jinnah%2C%20Lahore!5e0!3m2!1sen!2s!4v1753106191798!5m2!1sen!2s",
  },

  // --- Shopping Places (12) ---
  {
    id: 13,
    images: [Img13, Img15, Img16], // Placeholder
    title: "Anarkali Bazaar",
    location: "Lahore",
    description:
      "Anarkali Bazaar in Lahore has a rich history and is known for its vibrant culture. It offers a unique shopping experience with a variety of goods, from traditional clothing to exquisite handicrafts. This bustling market, named after the legendary Anarkali, provides a glimpse into the city's heritage. Visitors enjoy the lively atmosphere, delicious street food, and the chance to interact with local vendors. Anarkali Bazaar captures the essence of Lahore's charm and is a must-visit destination.",
    type: "Shopping",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13597.392546963783!2d74.30328638868437!3d31.56949976925893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191ca80557d915%3A0x18fe189fe4af33!2sAnarkali%20Bazaar%20Lahore%2C%2054000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1753106268069!5m2!1sen!2s",
  },
  {
    id: 14,
    images: [Img11, Img23, Img16], // Placeholder
    title: "Liberty Market",
    location: "Lahore",
    description:
      "Liberty Market in Lahore is a vibrant market known for its unique blend of shopping and food experiences. Established during the British colonial period, it features a variety of shops, including clothing, accessories, and handicrafts. The market attracts locals and tourists alike, offering a lively atmosphere and a taste of local culture. With its bustling streets, it's a popular destination for evening strolls and social gatherings",
    type: "Shopping",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.5087047500783!2d74.34198532442473!3d31.510185397647277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045af8941833%3A0xd6b95f4f17c66a16!2sLiberty%20Market%20Gulberg%20III%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1753106334970!5m2!1sen!2s",
  },
  {
    id: 15,
    images: [Img15, Img14, Img20],
    title: "Packages Mall",
    location: "Lahore",
    description:
      "Packages Mall, located in Lahore, is a major shopping destination. Opened in 2017, it features a wide array of local and international brands, dining options, and entertainment facilities. The mall spans several floors, providing a unique shopping experience for visitors. With its modern architecture and vibrant atmosphere, Packages Mall attracts both locals and tourists, making it one of the busiest shopping centers in the city.",
    type: "Shopping",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.914994928717!2d74.3529672744229!3d31.47152444955583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190680e8f2d445%3A0x32ba63a1571efb2a!2sPackages%20Mall!5e0!3m2!1sen!2s!4v1753106391565!5m2!1sen!2s",
  },
  {
    id: 16,
    images: [Img16, Img15, Img26],
    title: "Emporium Mall",
    location: "Lahore",
    description:
      "Emporium Mall in Lahore is a prominent shopping center that opened in 2009. It stands out for its expansive retail space, housing numerous local and international brands under one roof. With diverse dining options and entertainment facilities, the mall caters to families and individuals alike. The contemporary architecture adds to its appeal, making it a popular destination for shopping and leisure. Its strategic location enhances accessibility, attracting visitors from various parts of the city.",
    type: "Shopping",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.0470945803027!2d74.2634280744227!3d31.467890649735114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903d4d940f12b%3A0xdb8c83f6699d5226!2sEmporium%20Mall!5e0!3m2!1sen!2s!4v1753106458188!5m2!1sen!2s",
  },
  {
    id: 17,
    images: [Img17, Img16, Img19],
    title: "Fortress Square",
    location: "Lahore",
    description:
      "Fortress Square in Lahore is a historic shopping and entertainment venue, renowned for its unique blend of modern architecture and rich cultural heritage. Established in 2015, it has become a popular destination for both locals and tourists, featuring a wide array of shops, restaurants, and recreational areas. The square hosts various events and activities, making it a vibrant hub for social interaction and relaxation. Its strategic location also offers picturesque views of the surrounding landscape and nearby landmarks.",
    type: "Shopping",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.6985233352925!2d74.36062137442582!3d31.5324391465478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919051cb61188bd%3A0x4d1dcd7c98f3564d!2sFortress%20Square%20Mall!5e0!3m2!1sen!2s!4v1753106510467!5m2!1sen!2s",
  },
  {
    id: 18,
    images: [Img18, Img13, Img14],
    title: "Ichhra Bazaar",
    location: "Lahore",
    description:
      "Ichhra Bazaar in Lahore has a rich history and is a vibrant marketplace known for its unique blend of traditional and contemporary items. Dating back to the Mughal era, the bazaar is famous for textiles, handicrafts, and street food that captures the essence of local culture. With its bustling atmosphere, Ichhra Bazaar attracts both locals and tourists, offering an immersive shopping experience that reflects Lahore's heritage.",
    type: "Shopping",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.6942369248895!2d74.31535997442582!3d31.53255684654203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904997f3e5e51%3A0xa42619546060c75c!2sIchhra%20Bazar!5e0!3m2!1sen!2s!4v1753106573717!5m2!1sen!2s",
  },
  {
    id: 19,
    images: [Img19, Img15, Img16],
    title: "Shah Alam Market",
    location: "Lahore",
    description:
      "Shah Alam Market in Lahore has a rich history, established in the late 19th century. Known for its vibrant atmosphere, it offers a diverse range of products, including textiles, electronics, and traditional handicrafts. Its unique architecture reflects Mughal influences, making it a cultural landmark as well. The market is a bustling hub of commerce and a popular destination for both locals and tourists, where shoppers can find everything from souvenirs to everyday items",
    type: "Shopping",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.9172488458353!2d74.31586257442814!3d31.581317044130515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191beaad8885a5%3A0x47bca1d1ae9f0de1!2sShalmi%20market!5e0!3m2!1sen!2s!4v1753106670501!5m2!1sen!2s",
  },
  {
    id: 20,
    images: [Img21, Img19, Img16],
    title: "Pace Shopping Mall",
    location: "Lahore",
    description:
      "Pace Shopping Mall in Lahore has a rich history, opening its doors in 1999. It stands out for its unique blend of shopping, entertainment, and dining options, attracting visitors of all ages. The mall features a variety of local and international brands, along with a food court that offers diverse cuisines. Its modern architecture and vibrant atmosphere make it a popular destination for families and tourists alike, making it an integral part of Lahore's shopping scene.",
    type: "Shopping",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.957140486804!2d74.31508517442285!3d31.47036514961314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907dc891efad1%3A0x10745ba01f02e684!2sPace%20Shopping%20Mall!5e0!3m2!1sen!2s!4v1753106792636!5m2!1sen!2s",
  },
  {
    id: 21,
    images: [Img21, Img17, Img16],
    title: "Xinhua Mall",
    location: "Lahore",
    description:
      "Xinhua Mall in Lahore is a vibrant shopping destination, established to cater to diverse retail needs. Featuring multiple brands, dining options, and entertainment facilities, it offers a unique experience. This modern mall promotes a blend of shopping and leisure, attracting visitors from various backgrounds. Its strategic location enhances accessibility, making it a popular spot for both locals and tourists seeking quality goods and services.",
    type: "Shopping",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.611208931291!2d74.35145487442456!3d31.5073688477864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919044de9441f25%3A0x6f4736cfd417d1bc!2sXinhua%20Mall!5e0!3m2!1sen!2s!4v1753106864152!5m2!1sen!2s",
  },
  {
    id: 22,
    images: [Img22, Img25, Img36],
    title: "Hafeez Center",
    location: "Lahore",
    description:
      "Hafeez Center in Lahore has a rich history as a leading technology hub. Established in the late 1990s, it has become a one-stop shopping destination for electronics, computers, and mobile devices. The center features numerous shops offering diverse products and services, attracting customers from all over the city. Its modern architecture and vibrant atmosphere make it a popular hotspot for tech enthusiasts and a symbol of Lahore's evolving commercial landscape.",
    type: "Shopping",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.2935285997182!2d74.34081047442506!3d31.516097147355243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190458e6945b37%3A0xced4eb1a8c917321!2sHafeez%20Center!5e0!3m2!1sen!2s!4v1753106939748!5m2!1sen!2s",
  },
  {
    id: 23,
    images: [Img23, Img26, Img21],
    title: "Al-Fatah",
    location: "Lahore",
    description:
      "Al-Fatah Lahore is a renowned shopping destination that offers a variety of products, including clothing, electronics, and home goods. Established in the late 1990s, it quickly gained popularity for its modern retail experience and diverse selection. The store features a spacious layout that is easy to navigate, making it a preferred choice for shoppers in the region. Al-Fatah has become synonymous with quality and value, attracting customers from all walks of life.",
    type: "Shopping",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.6046861439168!2d74.31101717442328!3d31.48005894913469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190585788a1db1%3A0x6b66c7d393f34ceb!2sAl%20Fatah%20-%20Model%20Town!5e0!3m2!1sen!2s!4v1753107023678!5m2!1sen!2s",
  },
  {
    id: 24,
    images: [Img24, Img29, Img30],
    title: "Y-Block Market",
    location: "Lahore",
    description:
      "Y-Block Market in Lahore has a rich history, showcasing unique architectural styles and a vibrant shopping atmosphere. Established in the early 1990s, it has evolved into a popular destination for locals and tourists alike, offering diverse shops ranging from trendy boutiques to local crafts. The market also features a variety of eateries that serve delicious cuisine, making it a perfect spot for social gatherings. Its lively ambiance and rich cultural significance make Y-Block Market a must-visit location in Lahore.",
    type: "Shopping",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.9887880719134!2d74.37132327267909!3d31.46949459273668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190671801790e3%3A0xf687c18b63f0ba6a!2sY%20Block%20Park!5e0!3m2!1sen!2s!4v1753107140590!5m2!1sen!2s",
  },

  // --- Food Points (12) ---
  {
    id: 25,
    images: [Img25, Img35, Img36],
    title: "Gawalmandi Food Street",
    location: "Lahore",
    description:
      "Gawalmandi Food Street in Lahore is a vibrant culinary destination known for its rich history and diverse street food. Established decades ago, it offers a variety of local delicacies, including chaats, kebabs, and sweet treats. The lively atmosphere attracts locals and tourists alike, making it a hub for food enthusiasts seeking authentic taste experiences. It is particularly famous for its late-night offerings, providing a unique cultural experience in the heart of Lahore.",
    type: "Food",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.2253720513427!2d74.31896387442775!3d31.572867044548538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b5aece1ce5d%3A0xf3b78889d8efd081!2sGawalmandi%20Food%20St%2C%20Gawalmandi%2C%20Lahore%2C%2054000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1753107252673!5m2!1sen!2s",
  },
  {
    id: 26,
    images: [Img26, Img31, Img34],
    title: "Fort Road Food Street",
    location: "Lahore",
    description:
      "Fort Road Food Street in Lahore is a vibrant culinary destination, rich in history and culture. It features an array of stalls serving traditional Pakistani street food, attracting locals and tourists alike. The street is known for its lively atmosphere, where visitors enjoy diverse flavors, from spicy kebabs to sweet desserts. Fort Road's unique charm lies in its blend of heritage and contemporary dining, making it a must-visit spot for food enthusiasts and history lovers.",
    type: "Food",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.7087478961585!2d74.30900097442837!3d31.58703384384756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b1f6523da25%3A0xd1830bcd99179554!2sFort%20Road%20Food%20Street!5e0!3m2!1sen!2s!4v1753107299940!5m2!1sen!2s",
  },
  {
    id: 27,
    images: [Img27, Img25, Img36],
    title: "Lakshmi Chowk",
    location: "Lahore",
    description:
      "Lakshmi Chowk in Lahore is a vibrant historical marketplace known for its cultural significance and culinary delights. Established during British colonial rule, it has evolved into a lively hub for shopping and dining. The area is characterized by its unique blend of traditional and modern architecture, drawing both locals and tourists. Visitors can explore a variety of shops, food stalls, and eateries, making it a popular destination for authentic Pakistani cuisine and experience local culture.",
    type: "Food",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.4348572454123!2d74.32180602442747!3d31.56712094483289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b4e6cccafe1%3A0xe5445bb2045533fb!2sLakshmi%20Chowk%20Lahore!5e0!3m2!1sen!2s!4v1753107348994!5m2!1sen!2s",
  },
  {
    id: 28,
    images: [Img28, Img35, Img26],
    title: "Butt Karahi",
    location: "Lahore",
    description:
      "Butt Karahi in Lahore is a famous dish known for its unique, rich flavor and spicy aroma. Originating from the bustling streets of Lahore, this dish features tender meat, usually chicken or mutton, cooked in a vast, deep karahi (wok) with a blend of spices. It is typically served with naan or rice, making it a popular choice among locals and visitors alike. The culinary experience at Butt Karahi combines delicious food with vibrant, sociable dining atmosphere.",
    type: "Food",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.434525891075!2d74.32180602411168!3d31.56713003449774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b05a75eef91%3A0x7d69b7ea202a224!2sButt%20Karahi%20Tikka%20by%20Nadeem%20Butt!5e0!3m2!1sen!2s!4v1753107435242!5m2!1sen!2s",
  },
  {
    id: 29,
    images: [Img29, Img36, Img26],
    title: "Phajje de Paye",
    location: "Lahore",
    description:
      "Phajje de Paye, a traditional dish from Lahore, boasts a rich history in Punjabi cuisine. Made with slow-cooked trotters, it is known for its unique flavors and aromatic spices. Often served with naan or rice, this hearty meal is a favorite at local eateries, especially during winter. Its preparation involves simmering the trotters in a flavorful broth, resulting in a dish that is both nutritious and satisfying. This beloved cultural delicacy attracts food lovers seeking an authentic taste of Lahore",
    type: "Food",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.7739992595402!2d74.30996627442833!3d31.58524484393605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191c9e128e4b57%3A0xe0f843da6c0318f6!2sFazal%20Din%20Phajja%20Siri%20Paye%20-%20Since%201953!5e0!3m2!1sen!2s!4v1753107635228!5m2!1sen!2s",
  },
  {
    id: 30,
    images: [Img30, Img35, Img26],
    title: "Al-Fazal Foods",
    location: "Lahore",
    description:
      "Al-Fazal Foods, based in Lahore, has a rich history that dates back to its establishment in the early 2000s. Known for its quality products and commitment to customer satisfaction, it offers a wide range of food items, including spices, grains, and ready-to-eat meals. The company has built a reputation for excellence in flavors and freshness, making it a popular choice for families and restaurants alike.",
    type: "Food",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.4103543692786!2d74.30502477442221!3d31.457896150228116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919014d8d0aab31%3A0x78203b42a44f2b6b!2sAl-Fazal%20Restaurant%20%26%20BBQ!5e0!3m2!1sen!2s!4v1753107747109!5m2!1sen!2s",
  },
  {
    id: 31,
    images: [Img31, Img35, Img26],
    title: "Amritsari Hareesa",
    location: "Lahore",
    description:
      "Amritsari Hareesa from Lahore has a rich history, renowned for its unique taste and quality. This traditional dish, made from lentils and meat, is slow-cooked with special spices, resulting in a flavorful, creamy texture. Served hot, it is often enjoyed with naan and garnished with fresh herbs and lemon. Its origins can be traced back to the Mughal era, making it a beloved culinary staple in Pakistani cuisine.",
    type: "Food",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.336741307235!2d74.31766427442759!3d31.56981234469979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b003816a863%3A0xd3f51335c2b3923e!2sAmritsari%20hareesa%20Haji%20raiz!5e0!3m2!1sen!2s!4v1753107829996!5m2!1sen!2s",
  },
  {
    id: 32,
    images: [Img2, Img35, Img36],
    title: "Goga Naqeebia",
    location: "Lahore",
    description:
      "Goga Naqeebia in Lahore has a rich history as a popular social spot known for its delicious food and warm atmosphere. It serves traditional Pakistani cuisine and is a favored gathering place for locals and visitors alike. The establishment combines cultural heritage with culinary delight, making it a unique dining experience. Goga Naqeebia's reputation has grown over the years, symbolizing the vibrant food scene in Lahore",
    type: "Food",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.4758672950234!2d74.30677737442738!3d31.56599594488851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191d41dd7928c1%3A0xda12df3f0e877787!2sGoga%20Naqeebia!5e0!3m2!1sen!2s!4v1753107897400!5m2!1sen!2s",
  },
  {
    id: 33,
    images: [Img33, Img27, Img35],
    title: "Waris Nihari",
    location: "Lahore",
    description:
      "Waris Nihari in Lahore has a rich history, renowned for its unique and flavorful preparation. This traditional dish, made with slow-cooked meat and spices, is typically enjoyed for breakfast. It originated from Delhi, India, and migrated to Lahore, where it has since become a beloved culinary staple. Served with naan and garnished with ginger and cilantro, Waris Nihari embodies a fusion of culture and taste, attracting food lovers from all walks of life.",
    type: "Food",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.1715014041465!2d74.30952757442783!3d31.574344544475494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b589e36b5e7%3A0xfa8493b09db51f7!2sWaris%20Nihari!5e0!3m2!1sen!2s!4v1753108148843!5m2!1sen!2s",
  },
  {
    id: 34,
    images: [Img34, Img36, Img31],
    title: "Yasir Broast",
    location: "Lahore",
    description:
      "Yasir Broast in Lahore has a rich history, known for its delicious broasted chicken. Established in the late 1990s, this eatery quickly gained popularity for its unique cooking style, combining pressure cooking and frying. The result is tender, crispy chicken that has become a favorite among locals and visitors alike. With its simple menu and focus on quality, Yasir Broast is a beloved spot for tasty meals and a must-visit for food lovers in the city",
    type: "Food",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.477004621717!2d74.30652887442741!3d31.565964744890184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191ddf01b0d907%3A0x1bb0dc8caed2717d!2sYasir%20Broast%20Food%20Pont!5e0!3m2!1sen!2s!4v1753109033902!5m2!1sen!2s",
  },
  {
    id: 35,
    images: [Img5, Img29, Img34],
    title: "Benazir Kulfa",
    location: "Lahore",
    description:
      "Benazir Kulfa in Lahore has a rich history that reflects the city's diverse culture. Known for its unique kulfi, a traditional frozen dessert, it offers a delightful experience for locals and visitors alike. This iconic spot attracts food lovers who enjoy its simple, yet delicious offerings. The vibrant atmosphere and historical significance of Benazir Kulfa make it a must-visit destination, capturing the true essence of Lahore and its gastronomic traditions",
    type: "Food",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.568953405921!2d74.34314127442468!3d31.508529947729087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045ac76dc809%3A0xba8238e9811835e9!2sBenazir%20Kulfa!5e0!3m2!1sen!2s!4v1753109289264!5m2!1sen!2s",
  },
  {
    id: 36,
    images: [Img36, Img32, Img31],
    title: "Arif Chatkhara",
    location: "Lahore",
    description:
      "Arif Chatkhara in Lahore is famous for its unique blend of traditional flavors and modern twists on classic dishes. Known for its lively atmosphere, it attracts food lovers from all over. Each item on the menu is designed to offer a memorable dining experience, making it a go-to spot for both locals and tourists. With an emphasis on fresh ingredients and innovative recipes, Arif Chatkhara continues to hold a special place in the hearts of its patrons",
    type: "Food",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.771759832217!2d74.3098979744283!3d31.585306243933076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191d35fc29fed5%3A0x692bfbe8d0a81aa!2sArif%20Chatkhara!5e0!3m2!1sen!2s!4v1753109364183!5m2!1sen!2s",
  },
];

const Places = () => {
  // --- NEW: Expanded state to manage both popups ---
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);

  const historicalPlaces = AllPlacesData.filter(
    (place) => place.type === "Historical"
  );
  const shoppingPlaces = AllPlacesData.filter(
    (place) => place.type === "Shopping"
  );
  const foodPoints = AllPlacesData.filter((place) => place.type === "Food");

  // --- UPDATED: This now opens the main detail popup ---
  const handleLocationClick = (place) => {
    setSelectedPlace(place);
    setIsDescriptionOpen(true);
  };

  // --- NEW: Handler to switch from description popup to map popup ---
  const handleShowMap = () => {
    setIsDescriptionOpen(false);
    setIsMapOpen(true);
  };

  // --- NEW: Handler to close all popups ---
  const handleCloseAllPopups = () => {
    setSelectedPlace(null);
    setIsDescriptionOpen(false);
    setIsMapOpen(false);
  };

  return (
    <>
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto">
          <h1 className="my-8 ml-1 border-l-8 border-sky-700 py-2 pl-2 text-3xl font-bold">
            Places to Visit
          </h1>
          <PlaceCategorySection
            title="Historical Places"
            places={historicalPlaces}
            onLocationClick={handleLocationClick}
          />
          <PlaceCategorySection
            title="Famous Shopping Places"
            places={shoppingPlaces}
            onLocationClick={handleLocationClick}
          />
          <PlaceCategorySection
            title="Best Food Points"
            places={foodPoints}
            onLocationClick={handleLocationClick}
          />
        </div>
      </div>

      {/* --- NEW: Conditionally render the popups here --- */}
      {isDescriptionOpen && selectedPlace && (
        <PlaceDetailPopup
          place={selectedPlace}
          onClose={handleCloseAllPopups}
          onShowMap={handleShowMap}
        />
      )}
      {isMapOpen && selectedPlace && (
        <MapPopup place={selectedPlace} onClose={handleCloseAllPopups} />
      )}
    </>
  );
};

export default Places;
