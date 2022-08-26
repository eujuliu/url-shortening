import { NextPage } from "next";
import Link from "next/link";

import FacebookLogo from "@/assets/images/icon-facebook.svg";
import TwitterLogo from "@/assets/images/icon-twitter.svg";
import PinterestLogo from "@/assets/images/icon-pinterest.svg";
import InstagramLogo from "@/assets/images/icon-instagram.svg";

import { SocialListContainer } from "./styles";

const SocialList: NextPage = () => {
  return (
    <SocialListContainer>
      <li>
        <Link href="/">
          <a aria-label="Our Facebook account">
            <FacebookLogo fontSize={24} />
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a aria-label="Our Twitter account">
            <TwitterLogo fontSize={24} />
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a aria-label="Our Pinterest account">
            <PinterestLogo fontSize={24} />
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a aria-label="Our Instagram account">
            <InstagramLogo fontSize={24} />
          </a>
        </Link>
      </li>
    </SocialListContainer>
  );
};

export default SocialList;
