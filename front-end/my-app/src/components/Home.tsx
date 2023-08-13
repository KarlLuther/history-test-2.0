import Hero from "../subComponents/Hero";
import Fyi from "../subComponents/Fyi";
import CarouselSection from "./CarouselSection";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Fyi />
      <CarouselSection />
    </div>
  );
};

export default Home;
