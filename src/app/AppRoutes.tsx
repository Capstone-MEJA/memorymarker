import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

import UserProfile from "../features/pages/UserProfile";
import EditAccount from "../features/pages/EditAccount";
import ManagePosts from "../features/pages/ManagePosts";

import Map from "../features/map/Map";
import Register from "../features/auth/Register";
import Login from "../features/auth/Login";
import About from "../features/pages/about";
import AboutTeam from "../features/pages/AboutTeam";

/**
 * Component for application url routes
 * @returns generic routes for all users and conditionally renders specific routes for logged in users
 */

const AppRoutes = () => {
  const auth = useSelector((state: RootState) => state.auth);

  return (
    <div>
      <Routes>
        {auth._id ? (
          <>
            <Route path="/account" element={<UserProfile />} />
            <Route path="/information" element={<EditAccount />} />
            <Route path="/myposts" element={<ManagePosts />} />
          </>
        ) : (
          ""
        )}
        <Route path="/home" element={<Map />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<AboutTeam />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
