// import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { updateUser } from "../../store/usersSlice";
import { useState } from "react";
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
  // console.log("logged in user", loggedInUser);

  const [toggleForm, setToggleForm] = useState("");
  const [formValues, setFormValues] = useState("");

  const handleChange = (e) => {
    setFormValues(e.target.value);
    console.log(formValues);
  };

  const editInfo = async (e) => {
    if (e.target.value === "username") {
      setToggleForm("username");
      setFormValues("");
    } else if (e.target.value === "password") {
      setToggleForm("password");
      setFormValues("");
    } else {
      const updateObj: updateObj = { _id: loggedInUser._id };
      if (e.target.value.includes("Username")) {
        updateObj.username = formValues;
      } else {
        updateObj.password = formValues;
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
        </section>

        <section>
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
          {toggleForm !== "password" ? (
            <p>Your Super Top Secret Password :)</p>
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
