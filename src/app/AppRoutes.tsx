import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Map from "../features/map/Map";
import UserProfile from "../features/pages/UserProfile";
import EditAccount from "../features/pages/EditAccount";
import About from "../features/pages/about";
import Register from "../features/auth/Register";
import Login from "../features/auth/Login";
import ManagePosts from "../features/pages/ManagePosts";

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
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
