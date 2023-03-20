import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/authSlice";
import { AppDispatch } from "../../store";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const auth = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (auth._id) {
      navigate("/");
    }
  }, [auth._id, navigate]);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  function handleSubmit(e: any) {
    e.preventDefault();

    dispatch(loginUser(user));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button>
          {auth.loginStatus === "pending" ? "Submitting..." : "Login"}
        </button>
        {auth.loginStatus === "rejected" ? <p>{auth.loginError}</p> : null}
      </form>
    </div>
  );
};

export default Login;
