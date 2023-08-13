import "../componentsStyling/SliderCSS.css";
import { cardData } from "../types";
import placeholderImg from "../componentsStyling/imgs/card-img-placeholder.png";

interface TestCardProps {
  data: cardData;
}

const TestCard: React.FC<TestCardProps> = ({ data }) => {
  return (
    <div className="test-card">
      <div className="card-content">
        <img src={placeholderImg} alt={data.imgAlt} />
        <h3 className="card-title">{data.name}</h3>
      </div>
    </div>
  );
};

export default TestCard;
