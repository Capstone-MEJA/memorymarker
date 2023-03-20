// import "./app.css";
// import Map from "../Map";
import { useSelector } from "react-redux";

const Navbar = () => {
  const auth = useSelector((state: any) => state.auth);
  console.log(auth);
  return <div>this is the navbar</div>;
};

export default Navbar;
