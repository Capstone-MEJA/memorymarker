// import "./app.css";
// import Map from "../Map";
import AppRoutes from "./AppRoutes";
import React from 'react';
import Sidebar from "../features/SideBar";


const App: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <AppRoutes />
      {/* <Map /> */}
    </div>
  );
};

export default App;
