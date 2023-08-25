import HeroImg from "../imgs/hero-img.webp";
import "../componentsStyling/HeroStyling.css";
// import React;

// type imageContainerStyles {
//   background-image : string;
// }

// const imageContainerStyles = {
//   background-image: React.CSSProperties
// }

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container-sm-fluid container-xl">
        <div className="row">
          <div className="col-6 " id="hero-text-container">
            <div id="hero-text" style={{ height: "100%" }}>
              <h1 className="h1">
                Prepare for the History Section of your life in the UK test
              </h1>
              <p className="h5">
                And learn UK's history in a proper way by practicing your
                knowledge with our improved tests. Good luck!
              </p>
              <div
                className="container d-flex justify-content-center"
                id="hero-btns"
              >
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  id="cta-hero-btn"
                >
                  Let's Go!
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-lg"
                >
                  Explore...
                </button>
              </div>
            </div>
          </div>
          <div className="col-6 esm-hide">
            {/* <figure className="figure shadow" id="image"> */}
            <div className="container px-0" style={{ height: "100%" }}>
              <img
                src={HeroImg}
                alt="hero-img"
                className="figure-img img-fluid rounded"
              />
            </div>
            {/* </figure> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
