import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/authSlice";
import { AppDispatch } from "../../store";

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: any) => state.auth);
  //   console.log("auth", auth);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  //   console.log("user:", user);

  function handleSubmit(e: any) {
    e.preventDefault();

    dispatch(registerUser(user));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
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
          {auth.registerStatus === "pending" ? "Submitting..." : "Register"}
        </button>
        {auth.registerStatus === "rejected" ? (
          <p>{auth.registerError}</p>
        ) : null}
      </form>
    </div>
  );
};

export default Register;
