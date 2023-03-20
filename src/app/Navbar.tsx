// import "./app.css";
// import Map from "../Map";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { logoutUser } from "../store/authSlice";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const auth = useSelector((state: any) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      {auth._id ? (
        <>
          <div>Welcome {auth.username}</div>
          <div
            onClick={() => {
              dispatch(logoutUser(null));
            }}
          >
            Logout
          </div>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </div>
  );
};

export default Nav;
