import { FunctionComponent, SVGProps } from "react";

import BrandRecognition from "@/assets/images/icon-brand-recognition.svg";
import DetailedRecords from "@/assets/images/icon-detailed-records.svg";
import FullyCustomizable from "@/assets/images/icon-fully-customizable.svg";

export const advancedStatistics: {
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
  topPosition: string;
}[] = [
  {
    Icon: BrandRecognition,
    title: "Brand Recognition",
    text: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content",
    topPosition: "-20px",
  },
  {
    Icon: DetailedRecords,
    title: "Detailed Records",
    text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    topPosition: "30px",
  },
  {
    Icon: FullyCustomizable,
    title: "Fully Customizable",
    text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    topPosition: "80px",
  },
];
