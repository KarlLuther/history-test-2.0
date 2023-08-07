import "../componentsStyling/HeroCSS.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-flex-container">
        <div className="hero-text-flex-container">
          <h1 className="hero-h1">
            Prepare for the history part of your Life In The UK test
          </h1>
          <p className="hero-text">
            And learn UK's history in a proper way by practicing your knowledge
            with our improved tests. Good luck! 🫶
          </p>
          <img />
          <div className="hero-btn-container">
            <button className="btn-hero first">Get Started</button>
            <button className="btn-hero second">More info👇🏻</button>
          </div>
        </div>
        <div className="img-container">
          <img src={HeroImg} alt="hm" className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
