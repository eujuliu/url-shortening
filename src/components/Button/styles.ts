import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.colors.primary.cyan};
  border-radius: 5rem;
  border: none;
  padding: 1.5rem 4rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.neutral.white};
  margin: 1.5rem 0;

  transition: opacity 400ms;

  &:hover {
    opacity: 0.5;
  }
`;
