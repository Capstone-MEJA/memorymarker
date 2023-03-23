import { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { newPost } from "../../store/postsSlice";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { togglePostForm } from "../../store/globalSlice"


const AddPostForm = () => {
  //setting based variables/functions
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth);
  const global = useSelector((state: RootState) => state.global);

  //useState
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  // const [tag, setTag] = useState("");

  //useEffect hooks
  //helper function
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch(
      newPost({
        title: title,
        description: description,
        latitude: global.position.lat,
        longitude: global.position.lng,
        user: auth._id,
      })
    );
    dispatch(togglePostForm());
  }
  
  return (

    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <button type="button" onClick={() => dispatch(togglePostForm())}>
          <FaIcons.FaTimes />
        </button>
        <h2>Create post</h2>
        <input
          type="text"
          placeholder="title"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
        <input
          type="textarea"
          placeholder="description"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setDescription(e.target.value)
          }
        />
        {/* <input
          type="text"
          placeholder="tag"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTag(e.target.value)
          }
        /> */}
        <button type="submit">Submit</button>
      </form>
    </FormWrapper>
  );
};

export default AddPostForm;

const FormWrapper = styled.div`
  text-align: center;
  font-size: 50px;
  position: relative;
  background-color: white;
  width: auto;
  padding: 0.5em;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  height: auto;
`;

// const PostIconClose = styled.div`
//   display: flex;
//   justify-content: end;
//   font-size: 1.5rem;
//   margin-top: 0.75rem;
//   margin-right: 1rem;
//   color: #ffffff;
// `;
