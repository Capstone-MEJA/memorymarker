// import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { updateUser } from "../../store/usersSlice";

const EditAccount = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleEditUser = (e: any) => {
    e.preventDefault();
    if (e.target.username.value && e.target.password.value) {
      dispatch(
        updateUser({
          _id: "someID",
          username: e.target.username.value,
          password: e.target.password.value,
        })
      );
    } else {
      alert("PLEASE FILL IN ALL BLANKS, THANK YOU :)");
    }
  };

  return (
    <>
      <div className="wrapper">
        <section className="container">
          <span>
            <p>Username:</p>
            <h1>{"username"}</h1>
          </span>
        </section>

        <section className="container">
          <h1>Edit Information</h1>
          <form className="flex-column gap-1" onSubmit={handleEditUser}>
            <label htmlFor="user name">
              <small>Username:</small>
            </label>
            <input type="text" name="username" />
            <label htmlFor="password">
              <small>Password:</small>
            </label>
            <input type="password" name="password" />
            <button type="submit">Save</button>
          </form>
        </section>
      </div>
    </>
  );
};

export default EditAccount;
