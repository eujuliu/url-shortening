import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  max-width: 2560px;
  min-width: 320px;
  margin: auto;

  @media screen and (min-width: 2560px) {
    zoom: 150%;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  position: relative;

  padding: 3.8rem 1.8rem 2.4rem;
  width: 100%;

  @media screen and (min-width: 860px) {
    width: 97%;
    padding: 4rem 0;
  }
`;

export const Hamburger = styled.button`
  background: none;
  font-size: 0;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 860px) {
    display: none;
  }
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const MainFirstContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20rem;
  width: 100%;
  max-width: 1440px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  h1 {
    color: ${(props) => props.theme.colors.neutral.veryDarkViolet};
    text-align: center;
    font-size: 4.2rem;
    line-height: 1.2;
    margin-top: 6rem;
    max-width: 690px;
  }

  p {
    color: ${(props) => props.theme.colors.neutral.grayishViolet};
    text-align: center;
    max-width: 500px;
    margin: 1.6rem 0;
  }

  @media screen and (min-width: 860px) {
    width: 100%;
    flex-direction: row;
    justify-content: center;
    padding: 0 2rem 20rem;
    background: top right / 600px no-repeat url("/bg-illustration-working.svg");

    svg {
      display: none;
    }

    div {
      width: 100%;
      max-width: 1200px;
      align-items: flex-start;
    }

    h1 {
      font-size: 8rem;
      margin-top: 0;
    }

    h1,
    p {
      text-align: left;
    }
  }
`;

export const AdvancedStatistics = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.neutral.lightGray};
  width: 100%;
  padding: 20rem 0 7rem;
  position: relative;

  & > h1 {
    font-size: 3rem;
  }

  & > p {
    color: ${(props) => props.theme.colors.neutral.grayishViolet};
    text-align: center;
    margin: 2rem 0 9rem;
    width: 90%;
    max-width: 540px;
  }

  @media screen and (min-width: 860px) {
    padding: 20rem 2rem;
    padding-bottom: 30rem;
    & > h1 {
      font-size: 4rem;
    }

    .advanced-statistics-list-container {
      display: flex;
    }
  }
`;

export const BoostContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  padding: 5rem 0;
  min-height: 250px;
  background: center / 100vw no-repeat url("/bg-boost-mobile.svg"),
    ${(props) => props.theme.colors.primary.darkViolet};

  h1 {
    color: ${(props) => props.theme.colors.neutral.white};
    font-size: 2.5rem;
  }

  @media screen and (min-width: 860px) {
    background: center / cover no-repeat url("/bg-boost-desktop.svg"),
      ${(props) => props.theme.colors.primary.darkViolet};

    h1 {
      font-size: 4rem;
    }
  }
`;

export const Footer = styled.footer`
  background-color: ${(props) => props.theme.colors.neutral.veryDarkViolet};
  width: 100%;
  padding: 4rem 0;

  .footer-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    margin: auto;
  }

  @media screen and (min-width: 860px) {
    .footer-container {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      padding: 0 2rem;
    }

    div {
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      flex-grow: 1;
      max-width: 800px;
    }
  }
`;
