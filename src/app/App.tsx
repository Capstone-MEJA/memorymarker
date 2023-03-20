// import "./app.css";
// import Map from "../Map";
import AppRoutes from "./AppRoutes";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { loadUser } from "../store/authSlice";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  dispatch(loadUser(null));
  return (
    <div>
      <Navbar />
      <AppRoutes />
      {/* <Map /> */}
    </div>
  );
};

export default App;
