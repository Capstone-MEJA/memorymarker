import { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
<<<<<<< HEAD
import { AppDispatch } from "../../store";
=======
import { AppDispatch, RootState } from "../../store";
>>>>>>> 56e462d7f393d4f40ce6d07a42c0d33ee107415e
import { updatePost } from "../../store/postsSlice";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import { toggleEditPostForm } from "../../store/globalSlice";
import { useSelector } from "react-redux";

const EditPostForm = () => {
  //setting based variables/functions
  const dispatch = useDispatch<AppDispatch>();
  const global = useSelector((state: RootState) => state.global)

  //useState
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  // const [tag, setTag] = useState("");

  //useEffect hooks
  //helper function
  function handleSubmit(id: string | undefined) {
    if (typeof id === "string") {
      dispatch(
        updatePost({
          _id: id,
          title: title,
          description: description,
        })
      );
      dispatch(toggleEditPostForm());
    }
  }

<<<<<<< HEAD
  // useEffect(() => {
  //   dispatch(fetchAllPosts());
  // }, [dispatch]);
  //please fix to fetchSinglePost(props.info.id?...)

=======
>>>>>>> 56e462d7f393d4f40ce6d07a42c0d33ee107415e
  return (
    <FormWrapper>
      <form
        onSubmit={() => handleSubmit(global.selectedPost!._id)}
      >
        <h2>Edit post</h2>
        <button type="button" onClick={() => dispatch(toggleEditPostForm())}>
          <FaIcons.FaTimes />
        </button>
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
        <button>Submit</button>
      </form>
    </FormWrapper>
  );
};

export default EditPostForm;

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
