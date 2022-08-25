import styled from "styled-components";

export interface CopyLinkButtonProps {
  isClicked: boolean;
}

export const SavedLinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  position: relative;
  top: -80px;

  li {
    display: flex;
    flex-direction: column;
    list-style: none;
    background-color: ${(props) => props.theme.colors.neutral.white};
    margin: 1rem auto;
    border-radius: 1rem;
    padding: 2rem;
    width: 90%;

    div {
      display: flex;
      flex-direction: column;

      p,
      a {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        padding: 1rem 0;
        max-width: 600px;
      }

      a {
        color: ${(props) => props.theme.colors.primary.cyan};
        border-top: 1px solid ${(props) => props.theme.colors.neutral.lightGray};
        text-decoration: none;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    li {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 1rem 0;
      width: 100%;

      div {
        flex-direction: row;
        justify-content: space-between;
        flex-grow: 1;
        padding-right: 2rem;

        a {
          border: none;
        }
      }
    }
  }
`;

export const CopyLinkButton = styled.button<CopyLinkButtonProps>`
  width: 100%;
  border-radius: 0.5rem;
  padding: 0.8rem;
  color: ${(props) => props.theme.colors.neutral.white};
  font-weight: 700;

  background-color: ${(props) => props.theme.colors.primary.cyan};

  @media screen and (min-width: 1024px) {
    width: 10%;
  }
`;
