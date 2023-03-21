import { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { updatePost } from "../../store/postsSlice";
import styled from "styled-components";

interface Info {
  _id?: string;
  title?: String;
  description?: String;
  tags?: [String];
  latitude?: Number;
  longitude?: Number;
}

interface Props {
  setToggleEditPostForm: (toggle: boolean) => void;
  info: Info;
}

const EditPostForm = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  // const [tag, setTag] = useState("");

  function handleSubmit(id: any) {
    // e.preventDefault();
    dispatch(
      updatePost({
        _id: id,
        title: title,
        description: description,
      })
    );
    props.setToggleEditPostForm(false);
  }

  console.log("props", typeof props.info._id);
  return (
    <FormWrapper>
      <form
        onSubmit={() => {
          handleSubmit(props.info._id);
        }}
      >
        <h2>Edit post</h2>
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
