import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserID } from "../services/index.service";
import { IUser } from "../models/user";
import { UserContainer } from "../components/UserContainer/usercontainer";
import { Title } from "../components/Title/title";
import { Description } from "../components/Description/description";
import { ButtonShowMore } from "../components/ButtonShowMore";
import { DeleteButton } from "../components/DeleteButton/delete";
export const UserDetails = () => {
  const [user, setUser] = useState<IUser>();
  const params = useParams();
  const navigate=useNavigate()

  const getUser = async () => {
    const result = await getUserID(params.id);
    setUser(result.data);
  };
  
 
  const onBack=()=>{
    navigate(-1)
  }
  useEffect(() => {
    getUser();
  }, []);
  return (
    <UserContainer >
      
      <Title>{user?.name.toUpperCase()}</Title>
      <Description>{user?.address.city}</Description>
      <Description>{user?.address.street}</Description>
      <Description>{user?.address.suite}</Description>
      <ButtonShowMore onClick={onBack}>
        Back
      </ButtonShowMore>
    </UserContainer>
  );
};
