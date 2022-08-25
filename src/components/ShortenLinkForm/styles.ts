import styled from "styled-components";

export const ShortenLinkFormContainer = styled.form`
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
    color: ${(props) => props.theme.colors.neutral.white};
    margin-top: 2rem;

    transition: opacity 400ms;

    &:hover {
      opacity: 0.5;
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
      width: 23%;
      margin-left: 2rem;
    }
  }
`;
