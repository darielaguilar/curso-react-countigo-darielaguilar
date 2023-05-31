import { useNavigate } from "react-router-dom";
import { Description } from "../components/Description/description";
import { Title } from "../components/Title/title";
import { ButtonShowMore } from "../components/ButtonShowMore";
import { UserContainer } from "../components/UserContainer/usercontainer";
import {  useGetUser } from "../hooks/useGetUser";
import { Loading } from "../components/Loading";
import { DeleteButton } from "../components/DeleteButton/delete";
import { useState } from "react";
import { AppContext } from "../../../context";

export const UserList = () => {
  
  const { user, error, loading } = useGetUser();
  


  const navigate = useNavigate();
  const handleShowMore = (id: number) => {
    navigate({ pathname: id.toString() });
  };

  const deleteUser = (id: number) => {
    user.filter(e => e.id !== id)
  };
  return (
    <>
    {
      loading&&<Loading/>
    }
      {user.map((element) => (
        <UserContainer key={element.id}>
          <DeleteButton onClick={deleteUser(element.id)}>Delete</DeleteButton>
          <Title>{element.username.toUpperCase()}</Title>
          <Description>{element.email}</Description>
          <ButtonShowMore onClick={() => handleShowMore(element.id)}>
            Show More
          </ButtonShowMore>
        </UserContainer>
      ))}
    </>
  );
};
