// import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { updateUser } from "../../store/usersSlice";
import { ChangeEvent, MouseEvent, useState } from "react";
import { logoutUser } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export interface updateObj {
  _id: string;
  username?: string;
  password?: string;
}

const EditAccount = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const loggedInUser = useSelector((state: RootState) => state.auth);

  const [toggleForm, setToggleForm] = useState("");
  const [formValues, setFormValues] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues(e.target.value);
    console.log(formValues);
  };

  const editInfo = async (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLButtonElement;
    if (target.value === "username") {
      setToggleForm("username");
      setFormValues("");
    } else if (target.value === "password") {
      setToggleForm("password");
      setFormValues("");
    } else {
      const updateObj: updateObj = { _id: loggedInUser._id };
      if (target.value.includes("Username")) {
        if (formValues.length < 5 || formValues.length > 20) {
          return alert(
            "Username must be between 5 and 20 characters in length :)"
          );
        } else {
          updateObj.username = formValues;
        }
      } else {
        if (formValues.length < 8 || formValues.length > 20) {
          return alert(
            "Password must be between 8 and 20 characters in length :)"
          );
        } else {
          updateObj.password = formValues;
        }
      }
      await dispatch(updateUser(updateObj));
      setToggleForm("");
      await dispatch(logoutUser(null));
      navigate("/login");
    }
  };

  return (
    <>
      <Wrapper>
        <Logo>
          <img src="logo.png" />
        </Logo>
        <TitleContainer>
          <Title>Edit Account Information</Title>
          <Reminder>
            Friendly Reminder: After editing your account information, you will
            be asked to sign in again with your newly updated credentials :)
          </Reminder>
        </TitleContainer>

        <CredentialContainer>
          <CredsLabels>Username:</CredsLabels>
          {toggleForm !== "username" ? (
            <Creds>{loggedInUser.username}</Creds>
          ) : (
            <Input
              type="text"
              name="username"
              onChange={handleChange}
              value={formValues}
            />
          )}
          <Button
            onClick={editInfo}
            value={toggleForm !== "username" ? "username" : "updateUsername"}
          >
            {toggleForm !== "username" ? "Edit Username" : "Update Username"}
          </Button>
        </CredentialContainer>

        <CredentialContainer>
          <CredsLabels>Password:</CredsLabels>
          {toggleForm !== "password" ? (
            <Creds>********</Creds>
          ) : (
            <Input
              type="text"
              name="password"
              onChange={handleChange}
              value={formValues}
            />
          )}
          <Button
            onClick={editInfo}
            value={toggleForm !== "password" ? "password" : "updatePassword"}
          >
            {toggleForm !== "password" ? "Edit Password" : "Update Password"}
          </Button>
        </CredentialContainer>

        <CancelButtonContainer>
          <Button
            onClick={() => {
              setToggleForm("");
            }}
          >
            Cancel
          </Button>
        </CancelButtonContainer>
      </Wrapper>
    </>
  );
};

export default EditAccount;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-color: #ceebec;
`;

const Logo = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  margin-top: 30px;
`;

const TitleContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 50px;
  font-family: "Playfair Display", serif;
`;

const Reminder = styled.p`
  display: flex;
  justify-content: center;
  font-family: "Cormorant Garamond", serif;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const CredentialContainer = styled.section`
  display: flex;
  font-size: 20px;
  justify-content: center;
  align-items: center;
`;

const CredsLabels = styled(CredentialContainer)`
  font-size: 20px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  margin-right: 10px;
`;

const Creds = styled(CredentialContainer)`
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
  margin-right: 10px;
`;

const Input = styled.input`
  font-family: "Cormorant Garamond", serif;
  text-align: center;
  border-radius: 5px;
  font-size: 20px;
  margin: 20px 10px 20px 15px;
  border: none;
  height: 50%;
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
  cursor: pointer;
`;

const CancelButtonContainer = styled.section`
  display: flex;
  justify-content: center;
`;
