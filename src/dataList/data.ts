import { FunctionComponent, SVGProps } from "react";
import BrandRecognition from "@/assets/images/icon-brand-recognition.svg";
import DetailedRecords from "@/assets/images/icon-detailed-records.svg";
import FullyCustomizable from "@/assets/images/icon-fully-customizable.svg";

export const advancedStatisticsData: {
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

export const footerNavLinksData = [
  {
    title: "Features",
    items: [
      { item: "Link Shortening", link: "https://www.google.com/" },
      { item: "Branded Links", link: "https://www.google.com/" },
      { item: "Analytics", link: "https://www.google.com/" },
    ],
  },
  {
    title: "Resources",
    items: [
      { item: "Blog", link: "https://www.google.com" },
      { item: "Developers", link: "https://www.google.com" },
      { item: "Support", link: "https://www.google.com" },
    ],
  },
  {
    title: "Company",
    items: [
      { item: "About", link: "https://www.google.com" },
      { item: "Our Team", link: "https://www.google.com" },
      { item: "Careers", link: "https://www.google.com" },
      { item: "Contact", link: "https://www.google.com" },
    ],
  },
];
