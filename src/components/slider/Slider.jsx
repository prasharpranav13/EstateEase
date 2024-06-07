import { useState } from "react";
import "./slider.scss";
const Slider = ({ images }) => {
  const [imgIdx, setImgIdx] = useState(null);
  const changeSlide = (direction) => {
    if (direction === "left") {
      if (imgIdx === 0) setImgIdx(images.length - 1);
      else setImgIdx(imgIdx - 1);
    } else {
      if (imgIdx === images.length - 1) setImgIdx(0);
      else setImgIdx(imgIdx + 1);
    }
  };
  return (
    <div className="slider">
      {imgIdx != null && (
        <div className="fullSlider">
          <div
            className="arrow"
            onClick={() => {
              changeSlide("left");
            }}
          >
            <img src="/arrow.png" alt="" />
          </div>
          <div className="imgContainer">
            <img src={images[imgIdx]} alt="" />
          </div>
          <div
            className="arrow"
            onClick={() => {
              changeSlide("right");
            }}
          >
            <img src="/arrow.png" className="right" alt="" />
          </div>
          <div className="close" onClick={() => setImgIdx(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImg">
        <img src={images[0]} alt="" onClick={() => setImgIdx(0)} />
      </div>
      <div className="smallImg">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            key={index}
            onClick={() => {
              setImgIdx(index + 1); //as we removed first index img
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
