import { useState, ChangeEvent } from "react";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { newPost } from "../../store/postsSlice";

interface Props {
  lat: number | null;
  long: number | null;
  setTogglePostForm: (toggle: boolean) => void;
}

const AddPostForm = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [tag, setTag] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch(
      newPost({
        title: title,
        description: description,
        latitude: props.lat,
        longitude: props.long,
      })
    );
    props.setTogglePostForm(false);
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
        {/* <input
          type="text"
          placeholder="tag"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTag(e.target.value)
          }
        /> */}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddPostForm;
