import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AddProduct from "./addProduct/AddProduct";
import DashboardHome from "./dashboard/DashboardHome";
import Orders from "./orders/Orders";
import Products from "./products/Products";
import Users from "./users/Users";
import Settings from "./settings/Settings";
import EditProduct from "../AdminDashboard/editProduct/EditProduct";
import UserView from "../AdminDashboard/users/UserView";

const MainContent = () => {
  useEffect(() => {}, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="/products" element={<Products />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/users" element={<Users />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/edit/:productId" element={<EditProduct />} />
        <Route path="/view/:userId" element={<UserView />} />
      </Routes>
    </>
  );
};

export default MainContent;
