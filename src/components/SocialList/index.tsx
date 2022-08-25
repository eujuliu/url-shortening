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
          <a>
            <FacebookLogo fontSize={24} />
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>
            <TwitterLogo fontSize={24} />
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>
            <PinterestLogo fontSize={24} />
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>
            <InstagramLogo fontSize={24} />
          </a>
        </Link>
      </li>
    </SocialListContainer>
  );
};

export default SocialList;
