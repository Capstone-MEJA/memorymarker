import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { loadUser } from "../store/authSlice";

import Sidebar from "../features/nav/SideBar";
import AppRoutes from "./AppRoutes";

/**
 * Component for main app
 * Loads app as logged in user if they have a token saved in localStorage
 * @returns Sidebar and AppRoutes components
 */

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  dispatch(loadUser(null));

  return (
    <div>
      <Sidebar />
      <AppRoutes />
    </div>
  );
};

export default App;
