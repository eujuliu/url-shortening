import styled from "styled-components";

export const AdvancedStatisticsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
`;

export const AdvancedStatisticsSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: #fff;
  border-radius: 1rem;
  width: 90%;
  padding: 2rem 3rem 4rem;

  div {
    display: flex;
    background-color: ${(props) => props.theme.colors.primary.darkViolet};
    border-radius: 10rem;
    position: relative;
    top: -50px;
    padding: 2rem;
  }

  h1 {
    font-size: 2.4rem;
  }

  p {
    text-align: center;
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.neutral.grayishViolet};
  }
`;

export const AdvancedStatisticsDivider = styled.span`
  background-color: ${(props) => props.theme.colors.primary.cyan};
  height: 80px;
  width: 8px;
`;
