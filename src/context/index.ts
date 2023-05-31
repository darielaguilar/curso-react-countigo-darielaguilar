import { IUser } from "../modules/Users/models/user";
import { createContext } from "react"


export interface IAppContext{
    users: IUser[];
    user: IUser;
}

export interface IAppContextProps{
    data: IAppContext;
    setData: (data: IAppContext) => void;
}


export const AppContext = createContext<IAppContextProps>({
    data: {
        users: [],
        user:{
            id:0,
            name: "",
            username: "",
            email:    "",
            address:  {
                street: "",
                city: "",
                suite: "",
                zipcode: "",
                geo: {
                    lat: "",
                    lng: "",
                },
            },
            phone:    "",
            website:  "",
            company:  {
                name: "",
                catchPhrase: "",
                bs: "",
            },
        }
    },
    setData: () => {},
});
