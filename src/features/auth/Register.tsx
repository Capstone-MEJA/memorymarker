import { useState, useEffect, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/authSlice";
import { AppDispatch } from "../../store";
import { useNavigate } from "react-router-dom";

const Register = () => {
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

  function handleSubmit(e: React.FormEvent) {
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
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUser({ ...user, username: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUser({ ...user, password: e.target.value })
          }
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
