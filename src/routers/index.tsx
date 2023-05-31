import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Suspense, lazy } from "react";
import { Loading } from "../modules/Users/components/Loading";

const UserRouter = lazy(() => import('../modules/Users/routers/index'));

export const RootRouter = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
     
      <Route path="/user/*" 
      element={
        <Suspense fallback={<Loading/>}>
          <UserRouter />
        </Suspense>
      }/>

    </Routes>
  );
};
