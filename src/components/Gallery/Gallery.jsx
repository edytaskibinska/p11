import { Arrow } from "../../assets";
import "./Gallery.scss";

import { useState } from "react";

const gallerySlideStyle = {
  backgroundPosition: "center",
};

const Gallery = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const galleryStyleWithBg = {
    ...gallerySlideStyle,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };
  const multipleSlides = slides.length > 1;
  
  return (
    <div className="gallery">
      {multipleSlides && (
        <div className="galleryContainer">
          <div className="leftArrowStyles" onClick={goPrevious}>
            - <Arrow width="80" height="80" rotate="0" />
          </div>
          <div className="rightArrowStyles" onClick={goNext}>
            <Arrow width="80" height="80" rotate="180" />
          </div>
        </div>
      )}

      <div className="imgGalleryStyle" style={galleryStyleWithBg}></div>
      {multipleSlides && (
        <div className="galleryPager">
          {currentIndex + 1} / {slides.length}
        </div>
      )}
    </div>
  );
};

export default Gallery;
