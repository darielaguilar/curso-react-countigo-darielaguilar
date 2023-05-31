import { FC, ReactNode } from "react";
import { GridStyled } from "./grid.styled";

type GridProps = {
  children: ReactNode;
};
export const Grid: FC<GridProps> = ({ children }) => {
  return <GridStyled>{children}</GridStyled>;
};
