import { useState } from "react";

function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-full flex flex-col items-center"
          >
            <img
              src={slide.img}
              alt={`slide-${idx}`}
              className="w-full h-80 object-cover"
            />
            <p className="text-xs text-left mt-2 px-2">{slide.caption}</p>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
}

export default Carousel;
