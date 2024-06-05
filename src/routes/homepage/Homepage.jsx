import "./homepage.scss";
import Searchbar from "../../components/searchbar/Searchbar";
const Homepage = () => {
  return (
    <div className="homepage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fugit
            debitis consequatur officia? Sequi placeat labore quia ut quibusdam
            provident?
          </p>
          <Searchbar />
          <div className="boxes">
            <div className="box">
              <h1>18+</h1>
              <h3>Years of Experience</h3>
            </div>

            <div className="box">
              <h1>100+</h1>
              <h3>Awards</h3>
            </div>
            <div className="box">
              <h1>1000+</h1>
              <h3>Property Ready</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};
export default Homepage;
