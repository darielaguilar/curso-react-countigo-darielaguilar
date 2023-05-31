import { FC, ReactNode } from "react";
import { UserContainerStyled } from "./usercontainer.styled";

type UserContainerProps = {
  children: ReactNode;
};
export const UserContainer: FC<UserContainerProps> = ({ children }) => {
  return <UserContainerStyled>{children}</UserContainerStyled>;
};
