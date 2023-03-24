import {  Route, Routes } from "react-router-dom";
import Map from "../features/map/Map";
import UserProfile from "../features/pages/UserProfile";
import EditAccount from "../features/pages/EditAccount";
import About from "../features/pages/about";
import Register from "../features/auth/Register";
import Login from "../features/auth/Login";
import ManagePosts from "../features/pages/ManagePosts";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Map />} />
        <Route path="/account" element={<UserProfile />} />
        <Route path="/information" element={<EditAccount />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myposts" element={<ManagePosts />} />
        <Route path='/about' element={<About />} />
        <Route path="*" element={<Map />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
