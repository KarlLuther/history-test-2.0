import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface FeatureProps {
  id: string;
  iconTitle: IconProp;
  header: string;
  text: string;
}

const FeatureCard: React.FC<FeatureProps> = ({
  id,
  iconTitle,
  header,
  text,
}) => {
  return (
    <div className="card" id={id}>
      <div className="icon-container">
        <FontAwesomeIcon icon={iconTitle} size={"4x"} className="icon" />
      </div>
      <div className="card-body">
        <h5 className="card-title text-center">{header}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
