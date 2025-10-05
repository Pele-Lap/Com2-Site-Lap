'use client';
import { useState } from "react";

const images = [
  'https://lh3.google.com/d/1pSAWEKu5W6L4pc3Sm2yelDLGpUHEU7ib',
  "https://lh3.google.com/d/1FqIIDvke0R1Kb4vj_QvAWi-Nr9jpvVOr",
  "https://lh3.google.com/d/1pSAWEKu5W6L4pc3Sm2yelDLGpUHEU7ib",
  "https://lh3.google.com/d/1pSAWEKu5W6L4pc3Sm2yelDLGpUHEU7ib",
];

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index:number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="p-4">    
        <div className="w-full max-w-3xl mx-auto relative">
          {/* Image */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-85 object-cover transition-all duration-500"
            />
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
    </div>
  );
}
