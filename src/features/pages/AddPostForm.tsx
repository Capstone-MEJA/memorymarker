import { useState, ChangeEvent } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../../store/authSlice";
// import { AppDispatch } from "../../store";
// import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
  // const dispatch = useDispatch<AppDispatch>();
  // const navigate = useNavigate();
  // const auth = useSelector((state: any) => state.auth);

  // useEffect(() => {
  //   if (auth._id) {
  //     navigate("/");
  //   }
  // }, [auth._id, navigate]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");

  function handleSubmit(e: React.FormEvent) {
    // e.preventDefault();
    // dispatch(loginUser(user));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Create post</h2>
        <input
          type="text"
          placeholder="title"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
        <input
          type="text"
          placeholder="description"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setDescription(e.target.value)
          }
        />
        <input
          type="text"
          placeholder="tag"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTag(e.target.value)
          }
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddPostForm;
