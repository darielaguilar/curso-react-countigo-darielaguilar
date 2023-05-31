import { FC, ReactNode } from "react";
import { DescriptionStyled } from "./description.styled";
import { Address } from "../../models/user";
type DescriptionStyledProps = {
  children: ReactNode;
  
};
export const Description: FC<DescriptionStyledProps> = ({ children }) => {
  return <DescriptionStyled>{children}</DescriptionStyled>;
};
