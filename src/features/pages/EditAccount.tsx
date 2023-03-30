// import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { updateUser } from "../../store/usersSlice";
import { ChangeEvent, MouseEvent, useState } from "react";
import { logoutUser } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../styles/global";

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
        <LogoWrapper>
          <Logo src="logo.png" />
        </LogoWrapper>
        <TitleContainer>
          <Title>Edit Account Information</Title>
          <Reminder>
            Friendly Reminder: You will be asked to sign in again with your
            newly updated credentials :)
          </Reminder>
        </TitleContainer>

        <CredentialContainer>
          <CredWrapper>
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
          </CredWrapper>
          <Button
            onClick={editInfo}
            value={toggleForm !== "username" ? "username" : "updateUsername"}
          >
            {toggleForm !== "username" ? "Edit Username" : "Update Username"}
          </Button>
        </CredentialContainer>

        <CredentialContainer>
          <CredWrapper>
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
          </CredWrapper>
          <Button
            onClick={editInfo}
            value={toggleForm !== "password" ? "password" : "updatePassword"}
          >
            {toggleForm !== "password" ? "Edit Password" : "Update Password"}
          </Button>
        </CredentialContainer>

        <CancelButtonContainer>
          <CancelButton
            onClick={() => {
              setToggleForm("");
            }}
          >
            Cancel
          </CancelButton>
          <CancelButton
            onClick={() => {
              navigate("/account");
            }}
          >
            Back to Account Dashboard
          </CancelButton>
        </CancelButtonContainer>
      </Wrapper>
    </>
  );
};

export default EditAccount;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #ceebec;
  padding: 2rem;

  @media ${device.laptop} {
    height: 100vh;
  }
`;

const LogoWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin: 0px;
`;

const Logo = styled.img`
  width: 8rem;
  height: 8rem;

  @media ${device.tablet} {
    width: 10rem;
    height: 10rem;
  }
  @media ${device.laptop} {
    width: 14rem;
    height: 14rem;
  }
  @media ${device.desktop} {
    width: 16rem;
    height: 16rem;
  }
`;

const TitleContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 2rem;
  font-family: "Playfair Display", serif;

  @media ${device.laptop} {
    font-size: 4rem;
  }
`;

const Reminder = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: "Cormorant Garamond", serif;
  font-size: 15px;
  margin: 10px;

  @media (min-width:425px) {
    font-size: 20px;
    padding: 10px;
  }

  @media ${device.laptop} {
    font-size: 30px;
  }
`;

const CredentialContainer = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const CredWrapper = styled.section`
  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
  }
`;

const CredsLabels = styled(CredentialContainer)`
  font-size: 18px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 5px;

  @media ${device.laptop} {
    font-size: 20px;
    margin-right: 10px;
    margin-bottom: 0px;
  }
`;

const Creds = styled(CredentialContainer)`
  font-size: 15px;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 5px;

  @media ${device.laptop} {
    font-size: 20px;
    margin-right: 10px;
    margin-bottom: 0px;
  }
`;

const Input = styled.input`
  font-family: "Cormorant Garamond", serif;
  text-align: center;
  border-radius: 5px;
  font-size: 15px;
  margin: 5px;
  margin-bottom: 20px;
  border: none;
  height: 50%;

  @media ${device.laptop} {
    margin: 20px 10px 20px 15px;
    padding: 8px;
    font-size: 20px;
  }
`;

const Button = styled.button`
  background-color: #739cf0;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  padding: 8px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
  color: whitesmoke;

  @media ${device.laptop} {
    font-size: 20px;
    padding: 10px;
    margin: 20px 10px 20px 15px;
  }
`;

const CancelButtonContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 36px 10px 36px;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: center;
    margin: 0px;
  }
`;

const CancelButton = styled(Button)`
width: 15rem;

@media ${device.laptop} {
  width: fit-content;
}
`