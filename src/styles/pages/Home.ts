import styled from "styled-components";

interface NavBarProps {
  isHidden: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
    padding: 4rem 2rem;
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

export const NavigationMenu = styled.nav<NavBarProps>`
  display: ${(props) => (props.isHidden ? "inline" : "none")};
  position: absolute;
  top: 10rem;
  left: 5%;
  background-color: ${(props) => props.theme.colors.primary.darkViolet};
  border-radius: 1rem;
  padding: 1rem 3rem;
  width: 90%;

  ul {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;

    li {
      list-style-type: none;
      text-align: center;
      font-weight: 700;
      color: #fff;
      margin: 1rem;

      a {
        color: ${(props) => props.theme.colors.neutral.grayishViolet};
        text-decoration: none;
        transition: color 500ms;

        &:hover {
          color: ${(props) => props.theme.colors.neutral.veryDarkViolet};
        }
      }

      button {
        width: 100%;
        padding: 1rem;
        background-color: transparent;

        border-radius: 10rem;
        color: #fff;
      }
      .button-with-cyan-background {
        color: #fff;
        background-color: ${(props) => props.theme.colors.primary.cyan};
        transition: opacity 400ms;

        &:hover {
          opacity: 0.5;
        }
      }
    }
  }

  @media screen and (min-width: 860px) {
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
    background-color: #fff;
    padding: 0;
    margin-left: 2rem;

    ul {
      justify-content: center;
      align-items: center;
      flex-direction: row;
      padding: 0;

      li {
        color: ${(props) => props.theme.colors.neutral.veryDarkViolet};
        width: 100%;

        button {
          color: #000;
          width: 110px;
        }
      }
    }
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.neutral.grayishViolet};

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
  max-width: 1200px;

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
    justify-content: flex-start;
    padding: 0 2rem;
    padding-bottom: 20rem;

    svg {
      order: 2;
      width: 520px;
      position: absolute;
      right: 0px;
    }

    div {
      align-items: flex-start;
    }

    h1 {
      font-size: 8rem;
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
  background-color: #f0f1f6;
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

export const ShortenLinkForm = styled.form`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -80px;
  max-width: 1200px;

  background: top right / 70% no-repeat url("/bg-shorten-mobile.svg"),
    ${(props) => props.theme.colors.primary.darkViolet};
  width: 90%;
  border-radius: 1rem;
  padding: 2.5rem;

  div {
    width: 100%;
  }

  .input {
    border: none;
    width: 100%;
    border-radius: 0.5rem;
    padding: 1rem 1.4rem;
    color: ${(props) => props.theme.colors.neutral.veryDarkViolet};
  }

  .input-with-error {
    border: 2px solid ${(props) => props.theme.colors.secondary.red};
    outline-color: ${(props) => props.theme.colors.secondary.red};
  }

  p {
    color: ${(props) => props.theme.colors.secondary.red};
    font-size: 1.2rem;
    font-style: italic;
    font-weight: 500;
    width: 100%;
    margin-top: 0.4rem;
  }

  button {
    width: 100%;
    max-height: 5rem;
    font-weight: 700;
    background-color: ${(props) => props.theme.colors.primary.cyan};
    border-radius: 0.5rem;
    padding: 1rem 1.4rem;
    color: #fff;
    margin-top: 2rem;

    transition: opacity 400ms;

    &:hover {
      opacity: 0.8;
    }
  }

  @media screen and (min-width: 860px) {
    background: center / cover no-repeat url("/bg-shorten-desktop.svg"),
      ${(props) => props.theme.colors.primary.darkViolet};
    flex-direction: row;
    padding: 5rem 8rem;
    width: 97%;

    button {
      margin: 0;
      width: 20%;
      margin-left: 2rem;
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
    color: #fff;
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

export const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;

  li {
    margin: 0 1rem;
    list-style-type: none;

    a {
      color: #fff;
      transition: color 500ms;
    }

    a:hover {
      color: ${(props) => props.theme.colors.primary.cyan};
    }
  }

  @media screen and (min-width: 860px) {
    margin-top: 0;
  }
`;
