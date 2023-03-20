// import "./app.css";
// import Map from "../Map";
import AppRoutes from "./AppRoutes";
import React from 'react';
import Sidebar from "../features/nav/SideBar";
// import Nav from "./Navbar";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { loadUser } from "../store/authSlice";


const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  dispatch(loadUser(null));
  return (
    <div>
      <Sidebar />
      <AppRoutes />
      {/* <Map /> */}
    </div>
  );
};

export default App;
