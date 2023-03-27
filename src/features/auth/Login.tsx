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
      <FormWrapper onSubmit={handleSubmit}>
        <LogoTitleWrap>
        <ImageWrapper src='logo.png'/>
        <FormTitle>Log In</FormTitle>
          </LogoTitleWrap>
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
      </FormWrapper>
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  // font-size: 50px;
  height: 100vh;
  width: 100vw;
  background-color: #ceebec;
  // border: 2px solid black;

  @media ${device.mobileS} {
    max-width: 800px;
  }
`;

const ImageWrapper = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid blue;
  width: 10rem;
  height: 10rem;

  @media ${device.mobileS} {
    max-width: 800px;
    height: 5rem;
    width: 5rem;
    justify-content: center;
  }
  @media ${device.laptopL} {
    max-width: 1440px;
    justify-content: center;
  }
`;

const FormTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-family: "Playfair Display", serif;
`;
const Input = styled.input`
  font-family: "Cormorant Garamond", serif;
  text-align: center;
  border-radius: 5px;
  font-size: 20px;
  margin: 20px 10px 20px 15px;
  border: none;
  &::placeholder {
    font-size: 20px;
  }
`;

const Button = styled.button`
  background-color: #739cf0;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  padding: 10px;
  margin: 20px 10px 20px 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer
`;

const LoginCredsWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #ceebec;
  border: 2px solid green;

  @media ${device.mobileS} {
    max-width: 800px;
    flex-direction: column;    
  }

  @media ${device.laptopL} {
    max-width: 1441px;
    flex-direction: row;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  height: 50%;
  border: 2px solid red;
`;

const LogoTitleWrap = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid yellow;
  height: 50%;
`;
