import React, { useState } from "react";
import arrowRightImg from "../assets/img/arrow-right.png";
import arrowLeftImg from "../assets/img/arrow-left.png";

const Slideshow = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = images.length;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  const renderArrows = () => {
    if (totalSlides > 1) {
      return (
        <>
          <img
            src={arrowLeftImg}
            alt="Previous"
            className="slideshow-arrow left"
            onClick={prevSlide}
          />
          <img
            src={arrowRightImg}
            alt="Next"
            className="slideshow-arrow right"
            onClick={nextSlide}
          />
        </>
      );
    }
    return null;
  };

  const renderPagination = () => {
    if (totalSlides > 1) {
      return (
        <div className="slideshow-pagination">
          {images.map((_, index) => (
            <span
              key={`dot-${index}`}
              className={`slideshow-pagination-dot ${
                index === currentSlide ? "active" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="slideshow">
      {renderArrows()}
      <div className="slideshow-images">
        {images.map((image, index) => (
          <img
            key={`Slide ${index}`}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`slideshow-image ${
              index === currentSlide ? "active" : ""
            }`}
          />
        ))}
      </div>
      {renderPagination()}
    </div>
  );
};

export default Slideshow;
