import {  FC, ReactNode } from "react";
import { ContainerStyle } from "./container.styled";

type ContainerProps = {
  children: ReactNode;
};
export const Container: FC<ContainerProps> = ({ children }) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};
