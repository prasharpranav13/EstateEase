import "./slider.scss";
const Slider = ({ images }) => {
  return (
    <div className="slider">
      <div className="bigImg">
        <img src={images[0]} alt="" />
      </div>
      <div className="smallImg">
        {images.slice(1).map((image, index) => (
          <img src={image} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
