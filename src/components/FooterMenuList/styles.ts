import styled from "styled-components";

export const FooterMenuListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: #fff;
    margin: 3rem 0 2rem;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    font-size: 1.3rem;
    list-style: none;

    li {
      margin: 0.5rem 0;

      a {
        color: ${(props) => props.theme.colors.neutral.gray};
        text-decoration: none;

        transition: color 500ms;

        &:hover {
          color: ${(props) => props.theme.colors.primary.cyan};
        }
      }
    }
  }

  @media screen and (min-width: 860px) {
    h1 {
      margin: 0 0 2rem;
    }
    ul {
      align-items: flex-start;
    }
  }
`;
