import { Route, Routes } from "react-router-dom";
import Map from "../features/map/Map";
import UserProfile from "../features/pages/UserProfile";
import EditAccount from "../features/pages/EditAccount";
import Register from "../features/auth/Register";
import Login from "../features/auth/Login";
import About from "../features/pages/about";
import AboutTeam from "../features/pages/AboutTeam";

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
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<AboutTeam />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
