import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { studyData } from "../fakeCardData";
import placeholderImg from "../componentsStyling/imgs/card-img-placeholder.png";
const Carousel = () => {
  const slides = [1, 2, 3, 4, 5, 6, 7, 8];

  const slideLeft = () => {
    const slider = document.getElementById("slider")!;
    slider.scrollLeft = slider.scrollLeft - 240;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider")!;
    slider.scrollLeft = slider.scrollLeft + 240;
  };

  return (
    <div className="main-slider-container">
      <MdChevronLeft className="slider-icon left" onClick={slideLeft} />

      <div id="slider">
        {studyData.map((data, index) => {
          return (
            <div key={data.id} className="slider-card">
              <div
                className="card-content"
                style={{
                  backgroundImage: `url(${placeholderImg})`,
                }}
              >
                <h4>{data.name}</h4>
              </div>
            </div>
          );
        })}
      </div>

      <MdChevronRight className="slider-icon right" onClick={slideRight} />
    </div>
  );
};

export default Carousel;
