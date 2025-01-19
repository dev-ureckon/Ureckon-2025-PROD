import { PlusIcon } from "lucide-react";
import React, { useState } from "react";

function Gallery() {
  const images = [
    "mountain.png",
    "/path/to/image2.jpg",
    "/path/to/image3.jpg",
    "/path/to/image4.jpg",
    "/path/to/image5.jpg",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  const categories = [
    { name: "ROBOTICS", color: "bg-red-600" },
    { name: "QUIZ", color: "bg-fuchsia-500" },
    { name: "CODING", color: "bg-purple-600" },
    { name: "GAMING", color: "bg-yellow-500" },
    { name: "FLAGSHIP", color: "bg-green-600" },
    { name: "INITIATIVES", color: "bg-teal-500" },
    { name: "BIO-TECH", color: "bg-blue-600" },
    { name: "BIZ EVENTS", color: "bg-orange-500" },
  ];
  return (
    <div className="px-4 py-8 md:px-8 lg:px-16 max-lg:p-10 mt-[13rem]">
      <div className="mx-auto text-center mb-8">
        <h1 className="bg-gradient-to-br  max-lg:text-2xl text-[52.05px] bg-clip-text from-[#FBD60E] to-[rgb(221,144,61)] text-transparent uppercase font-pixel mb-[3rem] drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]">
          U6 GALLERY
        </h1>
      </div>

      <div>
        <div className="relative max-w-4xl mx-auto">
          <PlusIcon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-red-600" />
          <PlusIcon className="absolute h-6 w-6 bottom-0 -left-3 dark:text-white text-red-600" />
          <PlusIcon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-red-600" />
          <PlusIcon className="absolute h-6 w-6 bottom-0 -right-3 dark:text-white text-red-600" />

          <div className="aspect-[16/9] border-[12px] border-[#641316]">
            <img
              src={images[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-[#A81218] text-4xl"
            >
              ◀
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-[#A81218] text-4xl"
            >
              ▶
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? "bg-red-600" : "bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`${category.color} py-2 px-4 rounded font-pixel text-black hover:opacity-90 transition-opacity`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
