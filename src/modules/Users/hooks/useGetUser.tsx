import { useEffect, useState } from "react";
import { IUser } from "../models/user";
import { getUser } from "../services/index.service";

export const useGetUser = () => {
  const [user, setUser] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState();
  const handleGetUser = async () => {
    setLoading(true);
    try {
     const result = await getUser()
     setUser(result.data)
      setLoading(false);
    } catch (error ) {
      
      setError(error.message)
      setLoading(false);
    }
  };
  useEffect(() => {
    handleGetUser();
  }, []);
  return { user,loading,error };
};
