import "../componentsStyling/SliderCSS.css";
import TestCard from "../subComponents/TestCard";
import { studyData } from "../fakeCardData";
import Carousel from "../subComponents/Carousel";

const CarouselSection = () => {
  return (
    <section className="slider-container">
      {/* <h3 className="slider-header">
        Test your knowledge on specific topics and see if you want to study with
        us for yorself!
      </h3> */}
      <Carousel />
    </section>
  );
};

export default CarouselSection;
