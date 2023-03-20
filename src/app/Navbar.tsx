// import "./app.css";
// import Map from "../Map";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const auth = useSelector((state: any) => state.auth);
  console.log(auth);
  return (
    <div>
      <p>this is the navbar</p>
      {auth._id ? (
        <div>Logout</div>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
