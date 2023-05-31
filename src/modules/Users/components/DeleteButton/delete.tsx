import { FC, ReactNode } from "react";
import { DeleteButtonStyled } from "./index.styled";


type DeleteButtonProps = {
    children:ReactNode;
    onClick: any;
}

export const DeleteButton: FC<DeleteButtonProps> = ({children, onClick}) =>{
    return <DeleteButtonStyled onClick={onClick}>{children}</DeleteButtonStyled>
}