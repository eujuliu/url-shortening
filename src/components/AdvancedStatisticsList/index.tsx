import { NextPage } from "next";

import BrandRecognition from "@/assets/images/icon-brand-recognition.svg";
import DetailedRecords from "@/assets/images/icon-detailed-records.svg";
import FullyCustomizable from "@/assets/images/icon-fully-customizable.svg";

import {
  AdvancedStatisticsContainer,
  AdvancedStatisticsDivider,
  AdvancedStatisticsSection,
} from "./styles";

const AdvancedStatisticsList: NextPage = () => {
  return (
    <>
      <AdvancedStatisticsContainer>
        <AdvancedStatisticsSection topPosition="-20px">
          <div>
            <BrandRecognition fontSize={40} />
          </div>
          <h2>Brand Recognition</h2>
          <p>
            Boost your brand recognition with each click. Generic links
            don&apos;t mean a thing. Branded links help instil confidence in
            your content.
          </p>
        </AdvancedStatisticsSection>
        <AdvancedStatisticsDivider />
      </AdvancedStatisticsContainer>

      <AdvancedStatisticsContainer>
        <AdvancedStatisticsSection topPosition="30px">
          <div>
            <DetailedRecords fontSize={40} />
          </div>
          <h2>Detailed Records</h2>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </AdvancedStatisticsSection>
        <AdvancedStatisticsDivider />
      </AdvancedStatisticsContainer>

      <AdvancedStatisticsContainer>
        <AdvancedStatisticsSection topPosition="80px">
          <div>
            <FullyCustomizable fontSize={40} />
          </div>
          <h2>Fully Customizable</h2>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </AdvancedStatisticsSection>
      </AdvancedStatisticsContainer>
    </>
  );
};

export default AdvancedStatisticsList;
