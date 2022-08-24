import { NextPage } from "next";
import Link from "next/link";
import { FooterMenuListContainer } from "./styles";

interface FooterMenuListProps {
  data: { title: string; items: { item: string; link: string }[] }[];
}

const FooterMenuList: NextPage<FooterMenuListProps> = ({ data }) => {
  return (
    <>
      {data.map(({ title, items }) => {
        return (
          <FooterMenuListContainer key={title}>
            <h1>{title}</h1>
            <ul>
              {items.map(({ item, link }) => {
                return (
                  <li key={item}>
                    <Link href={link}>
                      <a target="_blank">{item}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </FooterMenuListContainer>
        );
      })}
    </>
  );
};

export default FooterMenuList;
