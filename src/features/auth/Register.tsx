import { useState, useEffect, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/authSlice";
import { AppDispatch, RootState } from "../../store";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Register = () => {
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
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await dispatch(registerUser(user));
  }

  return (
    <RegisterWrapper>
      <Logo>
        <img src="logo.png" />
      </Logo>

      <form onSubmit={handleSubmit}>
        <FormTitle>Register</FormTitle>
        <RegisterCredsWrapper>
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
            {auth.registerStatus === "pending" ? "Submitting..." : "Register"}
          </Button>
        </RegisterCredsWrapper>
        {auth.registerStatus === "rejected"
          ? // <p>{[...auth.registerError]}</p>
            auth.registerError.map((error, i) => {
              return <p key={i}>{error}</p>;
            })
          : null}
      </form>
    </RegisterWrapper>
  );
};

export default Register;

const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  height: 100vh;
  background-color: #ceebec;
`;

const Logo = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
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

const RegisterCredsWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80vw;
`;
