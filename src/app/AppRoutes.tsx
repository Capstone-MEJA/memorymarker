import {  Route, Routes } from "react-router-dom";
import Map from "../Map";
import UserProfile from "../features/UserProfile";
import EditAccount from "../features/EditAccount";
import About from "../pages/about";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Map />} />
        <Route path="/account" element={<UserProfile />} />
        <Route path="/information" element={<EditAccount />} />
        {/* <Route path="/account/myposts" element={<MyPosts />} /> */}
        <Route path="*" element={<Map />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
