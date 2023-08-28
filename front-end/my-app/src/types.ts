import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type cardData = {
  id: number;
  name: string;
  imgUrl: string;
  imgAlt: string;
};

export type FeatureCardData = {
  id: string;
  iconTitle: IconProp;
  header: string;
  text: string;
};
