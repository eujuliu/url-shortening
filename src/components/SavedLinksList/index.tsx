import { NextPage } from "next";
import Link from "next/link";

import { CopyLinkButton, SavedLinksContainer } from "./styles";

interface SavedLinksListProps {
  savedLinks: { original: string; short: string }[];
}

const SavedLinksList: NextPage<SavedLinksListProps> = ({ savedLinks }) => {
  return (
    <SavedLinksContainer>
      {savedLinks.map(({ original, short }) => {
        return (
          <li key={short}>
            <div>
              <p>{original}</p>
              <Link href={short}>
                <a target="_blank">{short}</a>
              </Link>
            </div>
            <CopyLinkButton
              isClicked={false}
              onClick={() => {
                navigator.clipboard.writeText(short);
              }}
            >
              Copy
            </CopyLinkButton>
          </li>
        );
      })}
    </SavedLinksContainer>
  );
};

export default SavedLinksList;
