import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { fetchHlTests } from "../API-requests/hl-tests-requests";
import hlTest from "../../../../back-end/src/models/hl-test";

const Carousel: React.FC = () => {
  const [hlTestsData, setHlTestsData] = useState<hlTest[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchHlTests();
        setHlTestsData(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

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
        {hlTestsData.map((data, index) => {
          return (
            <div key={index} className="slider-card">
              <div
                className="card-content"
                style={{
                  backgroundImage: `url(${data.imgUrl})`,
                }}
              >
                <div className="card-text-container">
                  <h4 className="card-title">{data.title}</h4>
                  <p className="card-body">{data.description}</p>
                  <a href="#" className="card-button">
                    Let's do this!
                  </a>
                </div>
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
