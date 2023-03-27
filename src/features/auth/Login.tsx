import { useState, useEffect, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/authSlice";
import { AppDispatch, RootState } from "../../store";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../styles/global";

const Login = () => {
    //setting based variables/functions
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.auth);

  //useState
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  
  //useEffect hooks
  useEffect(() => {
    if (auth._id) {
      navigate("/");
    }
  }, [auth._id, navigate]);

  //helper function
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    dispatch(loginUser(user));
  }
  return (
    <LoginWrapper>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
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
          {auth.loginStatus === "pending" ? "Submitting..." : "Login"}
        </button>
        {auth.loginStatus === "rejected" ? <p>{auth.loginError}</p> : null}
      </form>
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  height: 70vh;
  background-color: #ceebec;

  @media ${device.mobileS} {
    max-width: 800px;
  }

  @media ${device.laptopL} {
    max-width: 1441px;
  }
`;
