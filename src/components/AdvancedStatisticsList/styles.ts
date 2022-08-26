import styled from "styled-components";

interface AdvancedStatisticsSection {
  topPosition: string;
}

export const AdvancedStatisticsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 90%;
  margin: auto;

  @media screen and (min-width: 860px) {
    display: flex;

    flex-direction: row;
  }
`;

export const AdvancedStatisticsSection = styled.section<AdvancedStatisticsSection>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 364px;
  position: relative;

  background-color: ${(props) => props.theme.colors.neutral.white};
  border-radius: 1rem;
  padding: 2rem 3rem 4rem;

  div {
    display: flex;
    background-color: ${(props) => props.theme.colors.primary.darkViolet};
    border-radius: 10rem;
    top: -50px;
    padding: 2rem;
    position: relative;
  }

  h2 {
    font-size: 2.4rem;
    text-align: center;
    margin-bottom: 1.6rem;
    font-weight: 700;
  }

  p {
    text-align: center;
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.neutral.grayishViolet};
  }

  @media screen and (min-width: 860px) {
    top: ${(props) => props.topPosition};
    div {
      left: -110px;
    }

    h2,
    p {
      width: 100%;
      text-align: left;
    }
  }
`;

export const AdvancedStatisticsDivider = styled.span`
  background-color: ${(props) => props.theme.colors.primary.cyan};
  height: 80px;
  width: 8px;

  @media screen and (min-width: 860px) {
    height: 8px;
    width: 55px;
  }
`;
