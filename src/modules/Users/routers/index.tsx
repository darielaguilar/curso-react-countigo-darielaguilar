import { Routes, Route, Navigate } from "react-router-dom";
import { UserList } from "../pages/UserList";
import { UserDetails } from "../pages/UserDetail";


const UserRouter = () => {
  return (
    <Routes>
      <Route index element={<UserList />} />
      <Route path=":id" element={<UserDetails />} />
      <Route path={"*"} element={<Navigate to={"/user"} replace />} />
    </Routes>
  );
};

export default UserRouter;

