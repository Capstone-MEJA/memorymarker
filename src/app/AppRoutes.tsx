import {  Route, Routes } from "react-router-dom";
import Map from "../Map";
import UserProfile from "../features/UserProfile";
import EditAccount from "../features/EditAccount";
import About from "../features/pages/about";
import Register from "../features/auth/Register";
import Login from "../features/auth/Login";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Map />} />
        <Route path="/account" element={<UserProfile />} />
        <Route path="/information" element={<EditAccount />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/account/myposts" element={<MyPosts />} /> */}
        <Route path="*" element={<Map />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
