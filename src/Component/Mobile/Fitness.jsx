import React, { useEffect, useRef } from 'react';

const FitnessApp = () => {
  const screenshots = [
    "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=400&h=800&fit=crop",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=800&fit=crop",
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=800&fit=crop",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=800&fit=crop",
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=800&fit=crop"
  ];

  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let currentIndex = 0;
    const images = carousel.querySelectorAll('img');
    const totalImages = images.length;

    const showImage = (index) => {
      images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
      });
    };

    showImage(0);

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalImages;
      showImage(currentIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="py-20">
        <div className="container mx-auto py-12 px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 animate-fadeInUp">
              <h5 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 font-medium text-lg mb-3">
                Screenshot
              </h5>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                User Friendly Interface And Very Easy To Use Fitness App
              </h1>

              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. 
                Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo 
                justo eirmod magna dolore erat amet
              </p>

              {/* Checkmarks */}
              <div className="space-y-3 mb-6">
                <p className="flex items-center text-gray-700 text-lg">
                  <svg className="w-6 h-6 mr-3" viewBox="0 0 20 20" fill="none">
                    <defs>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <path 
                      fillRule="evenodd" 
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                      clipRule="evenodd"
                      fill="url(#grad1)"
                    />
                  </svg>
                  Diam dolor diam ipsum et tempor sit
                </p>
                <p className="flex items-center text-gray-700 text-lg">
                  <svg className="w-6 h-6 mr-3" viewBox="0 0 20 20" fill="none">
                    <defs>
                      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <path 
                      fillRule="evenodd" 
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                      clipRule="evenodd"
                      fill="url(#grad2)"
                    />
                  </svg>
                  Aliqu diam amet diam et eos labore
                </p>
                <p className="flex items-center text-gray-700 text-lg mb-6">
                  <svg className="w-6 h-6 mr-3" viewBox="0 0 20 20" fill="none">
                    <defs>
                      <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <path 
                      fillRule="evenodd" 
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                      clipRule="evenodd"
                      fill="url(#grad3)"
                    />
                  </svg>
                  Clita erat ipsum et lorem et sit
                </p>
              </div>

              {/* Button */}
              <a 
                href="#"
                className="inline-block mt-4 px-8 py-3 sm:px-10 sm:py-4 rounded-full text-white font-medium 
                       bg-gradient-to-r from-pink-500 to-purple-600 
                       hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Read More
              </a>
            </div>

            {/* Right Carousel */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end animate-fadeInUp">
              <div 
                ref={carouselRef}
                className="relative w-64 h-auto overflow-hidden rounded-3xl shadow-2xl"
              >
                {screenshots.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Screenshot ${index + 1}`}
                    className="w-full h-auto object-cover rounded-3xl transition-opacity duration-500"
                    style={{ display: index === 0 ? 'block' : 'none' }}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  );
};

export default FitnessApp;