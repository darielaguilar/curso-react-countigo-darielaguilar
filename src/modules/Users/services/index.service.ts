import { myCustomAxios } from "../../../axios/axios.config";
import { IUser } from "../models/user";

export const getUser = async () => {

    return await myCustomAxios.get<IUser[]>("users");
  
};
export const getUserID = async (id:string) => {
  
    return await myCustomAxios.get<IUser>(`users/${id}`);
  
};
