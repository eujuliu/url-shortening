import { NextPage } from "next";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { ButtonStyled } from "./styles";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button: NextPage<ButtonProps> = ({ children }) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

export default Button;
