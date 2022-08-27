import { NextPage } from "next";
import Link from "next/link";
import { FooterMenuListContainer } from "./styles";

const FooterMenuList: NextPage = () => {
  return (
    <>
      <FooterMenuListContainer>
        <h3>Features</h3>
        <ul>
          <li>
            <Link href="/">
              <a target="_blank">Link Shortening</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a target="_blank">Branded Links</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a target="_blank">Analytics</a>
            </Link>
          </li>
        </ul>
      </FooterMenuListContainer>
      <FooterMenuListContainer>
        <h3>Resources</h3>
        <ul>
          <li>
            <Link href="/">
              <a target="_blank">Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a target="_blank">Developers</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a target="_blank">Support</a>
            </Link>
          </li>
        </ul>
      </FooterMenuListContainer>
      <FooterMenuListContainer>
        <h3>Company</h3>
        <ul>
          <li>
            <Link href="/">
              <a target="_blank">About</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a target="_blank">Our Team</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a target="_blank">Careers</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a target="_blank">Contact</a>
            </Link>
          </li>
        </ul>
      </FooterMenuListContainer>
    </>
  );
};

export default FooterMenuList;
