import "../componentsStyling/FeatureSection.css";
import FeatureCard from "./FeatureCard";
import { FeatureCardData } from "../types";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";

const featuresData: FeatureCardData[] = [
  {
    id: "fc1",
    iconTitle: faWandMagicSparkles,
    header: "Interactive Tests",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem laborum debitis labore ratione esse accusantium nostrum saepe molestias. Soluta dolore modi laboriosam? Omnis numquam fugiat ut veritatis ea vel veniam!",
  },
  {
    id: "fc2",
    iconTitle: faBook,
    header: "Study properly",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem laborum debitis labore ratione esse accusantium nostrum saepe molestias. Soluta dolore modi laboriosam? Omnis numquam fugiat ut veritatis ea vel veniam!",
  },
  {
    id: "fc3",
    iconTitle: faHandHoldingHeart,
    header: "Completely Free",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem laborum debitis labore ratione esse accusantium nostrum saepe molestias. Soluta dolore modi laboriosam? Omnis numquam fugiat ut veritatis ea vel veniam!",
  },
  {
    id: "fc4",
    iconTitle: faChartColumn,
    header: "Track progress",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem laborum debitis labore ratione esse accusantium nostrum saepe molestias. Soluta dolore modi laboriosam? Omnis numquam fugiat ut veritatis ea vel veniam!",
  },
];

const Features = () => {
  return (
    <section className="feature-section ">
      <div className="container-fluid" id="feature-container">
        <h2 className="h2 text-center my-4">Why use our website?</h2>
        <div className="row w-100 mx-0" id="feature-row">
          {featuresData.map((data, index) => (
            <div className="col-sm-12 col-md-6 col-xl-3">
              <FeatureCard
                key={index + 1}
                id={data.id}
                iconTitle={data.iconTitle}
                header={data.header}
                text={data.text}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
