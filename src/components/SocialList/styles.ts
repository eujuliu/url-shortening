import styled from "styled-components";

export const SocialListContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;

  li {
    margin: 0 1rem;
    list-style-type: none;

    a {
      color: ${(props) => props.theme.colors.neutral.white};
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
