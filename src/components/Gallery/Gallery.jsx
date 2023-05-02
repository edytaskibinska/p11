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

  return (
    <div className="gallery">
      <div className="galleryContainer">
        <div className="leftArrowStyles" onClick={goPrevious}>
          PREV
          <Arrow />
        </div>
        <div className="rightArrowStyles" onClick={goNext}>
          NEXT
          <Arrow />
        </div>
      </div>
      <div className="imgGalleryStyle" style={galleryStyleWithBg}></div>
      <div className="galleryPager">  
        pager: : {currentIndex + 1} /{slides.length}
      </div>
    </div>
  );
};

export default Gallery;
