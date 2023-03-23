// import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { updateUser } from "../../store/usersSlice";
import { ChangeEvent, MouseEvent, useState } from "react";
import { logoutUser } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

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
      navigate("/home");
    }
  };

  return (
    <>
      <div className="wrapper">
        <section className="container">
          <h1>Edit Account Information</h1>
          <p>
            Friendly Reminder: After editing your account information, you will
            be asked to sign in again with your newly updated credentials.
          </p>
        </section>

        <section>
          <p>Username:</p>
          {toggleForm !== "username" ? (
            <p>{loggedInUser.username}</p>
          ) : (
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={formValues}
            />
          )}
          <button
            onClick={editInfo}
            value={toggleForm !== "username" ? "username" : "updateUsername"}
          >
            {toggleForm !== "username" ? "Edit Username" : "Update Username"}
          </button>
        </section>

        <section>
          <p>Password:</p>
          {toggleForm !== "password" ? (
            <p>********</p>
          ) : (
            <input
              type="text"
              name="password"
              onChange={handleChange}
              value={formValues}
            />
          )}
          <button
            onClick={editInfo}
            value={toggleForm !== "password" ? "password" : "updatePassword"}
          >
            {toggleForm !== "password" ? "Edit Password" : "Update Password"}
          </button>
        </section>
      </div>
    </>
  );
};

export default EditAccount;
