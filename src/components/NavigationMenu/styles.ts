import styled from "styled-components";

export interface NavigationMenuProps {
  isHidden: boolean;
}

export const NavigationMenuContainer = styled.nav<NavigationMenuProps>`
  display: ${(props) => (props.isHidden ? "inline" : "none")};
  position: absolute;
  top: 10rem;
  left: 5%;
  background-color: ${(props) => props.theme.colors.primary.darkViolet};
  border-radius: 1rem;
  padding: 1rem 3rem;
  width: 90%;

  ul:last-of-type {
    border-top: 1px solid ${(props) => props.theme.colors.neutral.grayishViolet};
  }

  ul {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;

    li {
      list-style-type: none;
      text-align: center;
      font-weight: 700;
      margin: 1rem;

      a {
        color: ${(props) => props.theme.colors.neutral.white};
        text-decoration: none;
        transition: color 500ms;

        &:hover {
          color: ${(props) => props.theme.colors.neutral.gray};
        }
      }

      button {
        width: 100%;
        padding: 1rem;
        background-color: transparent;

        border-radius: 10rem;
        color: ${(props) => props.theme.colors.neutral.white};
      }

      .button-with-cyan-background {
        color: ${(props) => props.theme.colors.neutral.white};
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
    background-color: ${(props) => props.theme.colors.neutral.white};
    padding: 0;
    margin-left: 2rem;

    ul:last-of-type {
      border-top: none;
    }

    ul {
      justify-content: center;
      align-items: center;
      flex-direction: row;
      padding: 0;

      li {
        a {
          color: ${(props) => props.theme.colors.neutral.black};
          transition: opacity 400ms;

          &:hover {
            opacity: 0.5;
          }
        }

        button {
          color: ${(props) => props.theme.colors.neutral.black};
          width: 110px;
        }
      }
    }
  }
`;
