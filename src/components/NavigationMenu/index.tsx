import { NextPage } from "next";
import Link from "next/link";

import { NavigationMenuContainer, NavigationMenuProps } from "./styles";

const NavigationMenu: NextPage<NavigationMenuProps> = ({ isHidden }) => {
  return (
    <NavigationMenuContainer isHidden={isHidden}>
      <ul>
        <li>
          <Link href="/">
            <a>Features</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Pricing</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Resources</a>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <button>Login</button>
        </li>
        <li>
          <button className="button-with-cyan-background">Sign Up</button>
        </li>
      </ul>
    </NavigationMenuContainer>
  );
};

export default NavigationMenu;
