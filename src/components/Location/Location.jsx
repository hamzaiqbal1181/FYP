import React from "react";

// Component ab 'place' prop receive karega
const Location = ({ place }) => {
  // Agar kisi wajah se place na mile to kuch na dikhayein
  if (!place) {
    return null;
  }

  return (
    // Humne yahan se container hata diya hai, ab yeh hamesha center mein aayega
    <div className="py-10">
      <h2 className="text-3xl font-bold sm:text-4xl text-center mb-8">
        Location of {place.title}
      </h2>
      <div className="rounded-2xl overflow-hidden shadow-2xl">
        <iframe
          // --- YEH SAB SE AHEM CHANGE HAI ---
          // URL ab 'place' prop se aa raha hai
          src={place.mapUrl}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
