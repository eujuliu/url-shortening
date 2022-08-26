import { NextPage } from "next";
import { FunctionComponent, SVGProps } from "react";
import {
  AdvancedStatisticsContainer,
  AdvancedStatisticsDivider,
  AdvancedStatisticsSection,
} from "./styles";

interface AdvancedStatisticsListProps {
  data: {
    Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
    title: string;
    text: string;
    topPosition: string;
  }[];
}

const AdvancedStatisticsList: NextPage<AdvancedStatisticsListProps> = ({
  data,
}) => {
  return (
    <>
      {data.map(({ Icon, title, text, topPosition }) => {
        return (
          <AdvancedStatisticsContainer key={title}>
            <AdvancedStatisticsSection topPosition={topPosition}>
              <div>
                <Icon fontSize={40} />
              </div>
              <h2>{title}</h2>
              <p>{text}</p>
            </AdvancedStatisticsSection>
            {title === "Brand Recognition" || title === "Detailed Records" ? (
              <AdvancedStatisticsDivider />
            ) : null}
          </AdvancedStatisticsContainer>
        );
      })}
    </>
  );
};

export default AdvancedStatisticsList;
