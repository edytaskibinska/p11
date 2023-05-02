import { Arrow } from "../../assets";
import "./Gallery.scss";

import { useState } from "react";

const slideStyles = {
//   width: "100%",
//   height: "200px",
//   backgroundSize: "cover",
  backgroundPosition: "center",
};

const Gallery = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div className="gallery">
      <div className="galleryContainer">
        <div className="leftArrowStyles" onClick={goToPrevious}>
          PREV
          <Arrow />
        </div>
        <div className="rightArrowStyles" onClick={goToNext}>
          NEXT
          <Arrow />
        </div>
      </div>
      <div className="imgGalleryStyle" style={slideStylesWidthBackground}></div>
      <div className="galleryPager">  
        pager: : {currentIndex + 1} /{slides.length}
      </div>
    </div>
  );
};

export default Gallery;
