import React from "react";
import Img1 from "../../assets/places/fort.jpg";
import Img2 from "../../assets/places/Minar-e-Pakistan.jpg";
import Img3 from "../../assets/places/mosque.jpg";
import BlogCard from "./BlogCard";
const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in Lahore",
    description:
      "Nestled in the heart of Lahore stands a monument that is less a building and more a giant storybook carved from stone. The Lahore Fort, or Shahi Qila, is a UNESCO World Heritage site where every wall, gate, and courtyard whispers tales of imperial grandeur, artistic genius, and military might. It’s not a single structure but a sprawling complex—a city within a city—that tells the story of centuries. Your journey begins with the formidable red sandstone walls and massive gates established by the great Mughal Emperor Akbar in the 16th century, structures built for power and designed to awe and intimidate. But as you venture deeper, the fort’s character softens into breathtaking elegance, a legacy of Akbar’s grandson, Shah Jahan, the emperor behind the Taj Mahal. He blessed the fort with gleaming white marble and unparalleled artistry, best seen in the legendary Sheesh Mahal (Palace of Mirrors), where intricate mirror mosaics glitter like a galaxy of stars, and the Naulakha Pavilion, a delicate marble structure so exquisitely inlaid with precious stones. The final grand statement is the monumental Alamgiri Gate, built by Emperor Aurangzeb, which majestically faces the Badshahi Mosque, creating one of the most iconic vistas in all of South Asia. From the Mughals to the Sikhs and the British, each era left its mark, making a walk through the Lahore Fort a journey through time itself. It’s a place where the echoes of emperors, queens, and soldiers still linger in the air, making it an essential, unforgettable experience",
    author: "Someone",
    date: "May 12, 2025",
  },
  {
    id: 1,
    image: Img2,
    title: "Top places to visit in Lahore",
    description:
      "Rising majestically from the historic grounds of Iqbal Park, Minar-e-Pakistan is far more than an architectural landmark; it is the physical embodiment of a nation's birth. This towering minaret stands on the exact spot where the Lahore Resolution was passed on March 23, 1940—the pivotal moment when the dream of an independent homeland for the Muslims of the subcontinent was formally declared. Its very design is a profound story in itself. The base, uniquely crafted to resemble the unfolding petals of a flower, symbolizes the blossoming of the new nation. This base is built in distinct stages: it begins with rough, uncut stones from Taxila to represent the difficult beginnings of the Pakistan Movement, progresses to hewn stone, and finally culminates in pristine white marble, signifying the successful and hard-won creation of Pakistan. Visitors can walk around its base and read inscriptions of the Lahore Resolution text, Quranic verses, the 99 names of Allah, and excerpts from the works of Allama Iqbal and Muhammad Ali Jinnah. Climbing to its panoramic viewing deck offers breathtaking views across Lahore, powerfully connecting this modern symbol of freedom with the ancient grandeur of the nearby Lahore Fort and Badshahi Mosque. A visit here is not just a sightseeing trip; it’s an emotional and patriotic encounter with the soul of a nation, a towering testament to hope, struggle, and identity",
    author: "Someone",
    date: "May 12, 2025",
  },
  {
    id: 1,
    image: Img3,
    title: "Top places to visit in Lahore",
    description:
      "Dominating the Lahore skyline with unparalleled grandeur, the Badshahi Mosque is a monumental testament to faith and imperial power, an architectural crescendo that still echoes with the might of its creators. A breathtaking vision of deep red sandstone crowned by three pristine white marble domes, it stands as the final great architectural masterpiece of the mighty Mughal Empire. Commissioned by the formidable Emperor Aurangzeb and completed in 1673, its sheer scale is designed to inspire absolute awe and a sense of human smallness before the divine. The experience begins long before you enter, as you ascend the flight of stately steps, feeling the weight of history with every footfall. Its location is a stroke of genius, creating a powerful architectural dialogue with the adjacent Lahore Fort; its magnificent entrance gate directly faces the fort's Alamgiri Gate, forming a majestic royal axis that connects the temporal power of the emperor with the spiritual authority of God. As you pass through this gate, you step into one of the largest mosque courtyards in the world—an immense, open space capable of welcoming up to 100,000 worshippers. This vast expanse of red sandstone, punctuated by a central marble ablution tank, is an ocean of tranquility. Standing in its center, the sky feels immense, and the sounds of the city outside fade into a distant hum, replaced by the gentle cooing of pigeons and the echoes of footsteps on ancient stone. But the mosque's profound beauty isn't just in its colossal size. Step inside the cool, serene prayer hall to discover a world of intricate frescoes, delicate stucco tracery, and elaborate floral motifs that adorn the arches and ceilings, showcasing the refined artistic sensibilities of the era. The walls are covered in elaborate muqarnas (honeycomb vaulting) and the ceilings bloom with complex floral frescoes in soft hues, a delicate contrast to the robust exterior. The interplay of light filtering through the arches creates a shifting tapestry of shadows, encouraging quiet contemplation. The four corner minarets are not mere decorations; they are proud sentinels that anchor the entire structure, their red sandstone shafts rising in three distinct stages, crowned with elegant marble canopies. Having survived periods of neglect during the Sikh and British eras when it was repurposed for secular use, its restoration to its sacred purpose makes its current vibrancy even more meaningful. To walk barefoot on its cool marble floors, to hear the call to prayer reverberate across the courtyard, is to connect directly with centuries of history, faith, and artistry. The Badshahi Mosque isn't just a monument to be seen; it's an atmosphere to be felt, a profound spiritual and historical anchor for Lahore and the entire nation",
    author: "Someone",
    date: "May 12, 2025",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div>
        <div className="container pl-15">
          <h1 className="my-8 ml-10 border-l-8 border-sky-700 py-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item, index) => (
              <div className="mx-4">
                <BlogCard key={index} {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsComp;
