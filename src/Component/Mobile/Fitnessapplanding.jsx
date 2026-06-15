
import React, { useEffect, useState } from "react";

const FitnessMobile = () => {
  const screenshots = [
    "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=400&h=800&fit=crop",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=800&fit=crop",
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=800&fit=crop",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=800&fit=crop",
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % screenshots.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="px-4 py-16 bg-white">

      {/* Heading */}
      <div className="text-center mb-8">
        <h5 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 text-sm font-semibold mb-2">
          APP SCREENSHOT
        </h5>
        <h2 className="text-2xl font-bold text-gray-900 leading-snug">
          Easy & User Friendly Fitness App
        </h2>
      </div>

      {/* Mobile Carousel */}
      <div className="relative mx-auto w-[240px] h-[480px] rounded-[2rem] shadow-2xl overflow-hidden mb-8">
        {screenshots.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="fitness screenshot"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              active === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-center text-gray-600 text-base leading-relaxed mb-6">
        Track your workouts, stay motivated and achieve your fitness goals with
        our simple and powerful mobile app experience.
      </p>

      {/* Points */}
      <div className="space-y-3 mb-8">
        {[
          "Simple & clean UI",
          "Workout tracking",
          "Daily fitness goals",
        ].map((text, i) => (
          <div key={i} className="flex items-center text-gray-700">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 mr-3"></span>
            {text}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <button className="px-8 py-3 rounded-full text-white font-medium bg-gradient-to-r from-pink-500 to-purple-600 active:scale-95 transition">
          Read More
        </button>
      </div>
    </div>
  );
};

export default FitnessMobile;
