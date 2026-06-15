import React, { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext"; // ← Import this

import img1 from "../Mobile/img/newmobileimage.png";
import img2 from "../Mobile/img/mobileview3.png";
import img3 from "../Mobile/img/mobileview4.png";

const MobileOnboarding = () => {
  const { isDark } = useTheme(); // ← Get theme from context

  const images = [img1, img2, img3];
  const [active, setActive] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const bg = isDark ? "bg-black" : "bg-gray-50";
  const text = isDark ? "text-white" : "text-gray-900";
  const subText = isDark ? "text-gray-300" : "text-gray-600";
  const inputClass = isDark
    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-red-600"
    : "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-red-500";
  const headingClass = isDark ? "text-white" : "text-gray-900";
  const bodyClass = isDark ? "text-gray-300" : "text-gray-700";
  const cardClass = isDark
    ? "bg-gray-900/70 border-red-900/40 hover:border-red-700/60 hover:shadow-red-950/50"
    : "bg-white border-gray-200 hover:border-red-200 hover:shadow-xl";

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark ? "bg-black" : "bg-gray-50"
      } px-4 py-16`}
    >
      {/* Main Wrapper */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h3
                  className={`text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 ${text}`}
                >
                  Innovation 
                  <span className="text-[#9F714E]">  App Solutions</span>
                </h3>

          <p
            className={`text-sm md:text-base leading-relaxed mb-6 transition-colors ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Transform your ideas into powerful digital experiences with custom
            mobile app development solutions designed for performance,
            scalability, and user engagement. We create secure, modern, and
            feature-rich Android and iOS applications tailored to your business
            needs. From intuitive UI/UX design and seamless functionality to
            backend integration and ongoing support, our app development
            services help businesses streamline operations, connect with
            customers, and drive growth.
          </p>

          
        </div>

        {/* Right Mobile Mockup */}
        <div className="md:w-1/2 flex justify-center">
          <div
            className={`relative w-60 h-[420px] 
              sm:w-64 sm:h-[460px]
              md:w-72 md:h-[520px]
              rounded-[2.5rem] 
              transition-all duration-500
              ${
                isDark
                  ? "bg-zinc-950 shadow-[0_20px_60px_rgba(185,28,28,0.4)] ring-1 ring-zinc-800"
                  : "bg-zinc-900 shadow-[0_20px_60px_rgba(255,0,0,0.25)] ring-1 ring-gray-300"
              }`}
          >
            {/* Screen */}
            <div
              className={`relative w-full h-full rounded-[2rem] overflow-hidden transition-colors ${
                isDark
                  ? "bg-gradient-to-br from-zinc-950 via-black to-red-950"
                  : "bg-white"
              }`}
            >
              {/* Images */}
              <div className="relative w-full h-full overflow-hidden">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Onboarding ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      active === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>

              {/* Bottom Overlay */}
              <div
                className={`absolute bottom-0 w-full px-5 pb-12 bg-gradient-to-t transition-colors ${
                  isDark
                    ? "from-black/90 via-black/70 to-transparent"
                    : "from-black/80 via-black/60 to-transparent"
                }`}
              >
                {/* Dots */}
                <div className="flex justify-center gap-2 mb-4">
                  {images.map((_, i) => (
                    <span
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        active === i
                          ? "bg-red-500 scale-125"
                          : isDark
                            ? "bg-red-500/40"
                            : "bg-red-500/50"
                      }`}
                    />
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-between text-xs uppercase tracking-wider font-medium">
                  <button
                    className={`transition-colors ${
                      isDark
                        ? "text-gray-400 hover:text-gray-200"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    Skip
                  </button>
                  <button className="font-semibold text-red-400 hover:text-red-300 transition-colors">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileOnboarding;
