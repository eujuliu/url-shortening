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
  max-width: 1440px;
  position: relative;

  padding: 3.8rem 1.8rem 2.4rem;
  width: 100%;
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
      color: #fff;
      margin: 1rem;

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
  max-width: 1440px;
`;

export const MainFirstContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding-bottom: 20rem;

  h1 {
    color: ${(props) => props.theme.colors.neutral.veryDarkViolet};
    text-align: center;
    font-size: 4.2rem;
    line-height: 1.2;
    margin-top: 6rem;
  }

  p {
    color: ${(props) => props.theme.colors.neutral.grayishViolet};
    text-align: center;
    width: 30rem;
    margin: 1.6rem 0;
  }
`;

export const ShortenLinkForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  bottom: -23rem;

  background: top right / 70% no-repeat url("/bg-shorten-mobile.svg"),
    ${(props) => props.theme.colors.primary.darkViolet};
  width: 90%;
  border-radius: 1rem;
  padding: 2.5rem;

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
`;

export const AdvancedStatistics = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f0f1f6;
  padding: 20rem 0 7rem;

  & > h1 {
    font-size: 3rem;
  }

  & > p {
    color: ${(props) => props.theme.colors.neutral.grayishViolet};
    text-align: center;
    margin: 2rem 0 9rem;
    width: 90%;
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
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: ${(props) => props.theme.colors.neutral.veryDarkViolet};
  width: 100%;
  padding: 4rem 0;
`;

export const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;

  li {
    margin: 0 1rem;
    list-style-type: none;
  }
`;
