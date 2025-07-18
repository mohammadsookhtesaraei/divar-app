import { Navigate, Route, Routes } from "react-router";
import { useQuery } from "@tanstack/react-query";

import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import AuthPage from "../pages/AuthPage";
import AdminPage from "../pages/AdminPage";
import NotFoundPage from "../pages/404";
import Loader from "../components/modules/Loader";

import { getProfile } from "../services/user";

const Router = () => {
  const {data,isPending}=useQuery({queryKey:["profile"],queryFn:getProfile});
 
  if(isPending) return <Loader/>
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/dashboard" element={data ? <DashboardPage /> :<Navigate to="/auth"/>} />
      <Route path="/auth" element={data ? <Navigate to="/dashboard"/> :<AuthPage />} />
      <Route path="/admin" element={data && data.data.role === "ADMIN" ? <AdminPage /> : <Navigate to="/"/>} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
