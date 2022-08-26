import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

import { ListContainer, SavedLinksContainer } from "./styles";

interface SavedLinksListProps {
  savedLinks: { original: string; short: string }[];
}

interface ListProps {
  original_link: string;
  short_link: string;
}

const SavedLinksList: NextPage<SavedLinksListProps> = ({ savedLinks }) => {
  return (
    <SavedLinksContainer>
      {savedLinks.map(({ original, short }) => {
        return <List key={short} original_link={original} short_link={short} />;
      })}
    </SavedLinksContainer>
  );
};

const List: NextPage<ListProps> = ({ original_link, short_link }) => {
  const [buttonText, setButtonText] = useState("Copy");

  return (
    <ListContainer textEqualToCopied={buttonText === "Copied!"}>
      <div>
        <p>{original_link}</p>
        <Link href={short_link}>
          <a target="_blank">{short_link}</a>
        </Link>
      </div>
      <button
        onClick={() => {
          navigator.clipboard.writeText(short_link);
          setButtonText("Copied!");
        }}
      >
        {buttonText}
      </button>
    </ListContainer>
  );
};

export default SavedLinksList;
