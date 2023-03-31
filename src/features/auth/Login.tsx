import { useState, useEffect, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/authSlice";
import { AppDispatch, RootState } from "../../store";
import { useNavigate } from "react-router-dom";
import { device } from "../../styles/global";
import styled from "styled-components";

/**
 * Component for user login page
 * @returns A form for a user to login in that conditionally displays an error message on submit if the user's credentials don't match the database
 */

const Login = () => {
  // setting base variables
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.auth);

  // useState
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  // useEffect hooks
  useEffect(() => {
    if (auth._id) {
      navigate("/");
    }
  }, [auth._id, navigate]);

  // helper function
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch(loginUser(user));
  }

  return (
    <LoginWrapper>
      <LogoWrapper>
        <Logo src="logo.png" />
      </LogoWrapper>

      <form onSubmit={handleSubmit}>
        <FormTitle>Log In</FormTitle>
        <LoginCredsWrapper>
          <Input
            type="text"
            placeholder="username"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUser({ ...user, username: e.target.value })
            }
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUser({ ...user, password: e.target.value })
            }
          />
          <Button>
            {auth.loginStatus === "pending" ? "Submitting..." : "Login"}
          </Button>
        </LoginCredsWrapper>
        {auth.loginStatus === "rejected" ? <p>{auth.loginError}</p> : null}
      </form>
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ceebec;
  height: 100vh;
  width: 100%;
`;

const LogoWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin: 0px;
`;

const Logo = styled.img`
  width: 20rem;

  @media ${device.laptop} {
    width: 30rem;
  }
`;

const FormTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-family: "Playfair Display", serif;
  font-size: 2rem;
  margin-bottom: 1rem;

  @media ${device.laptop} {
    font-size: 4rem;
  }
`;

const Input = styled.input`
  font-family: "Cormorant Garamond", serif;
  text-align: center;
  border-radius: 5px;
  font-size: 20px;
  margin: 10px 10px 10px 15px;
  border: none;
  width: 13rem;
  padding: 5px;
  &::placeholder {
    font-size: 20px;
  }

  @media ${device.laptop} {
    height: 3rem;
    &::placeholder {
      font-size: 23px;
    }
  }
`;

const Button = styled.button`
  background-color: #739cf0;
  font-family: "Montserrat", sans-serif;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding: 5px;
  margin: 10px 2rem 20px 2rem;
  width: 13rem;
  color: whitesmoke;

  @media ${device.laptop} {
    margin: 20px 10px 20px 15px;
    height: 3rem;
    width: 10rem;
  }
`;

const LoginCredsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // align-content: center;
  // width: 50vw;

  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;
