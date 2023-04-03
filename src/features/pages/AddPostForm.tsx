import { useState, ChangeEvent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { fetchAllPosts, newPost } from "../../store/postsSlice";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { togglePostForm } from "../../store/globalSlice";
import { device } from "../../styles/global";

/**
 * Component for adding a post
 * @returns A form for a logged in user to create a new post when/where the map is clicked
 */

const AddPostForm = () => {
  // setting base variables
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth);
  const global = useSelector((state: RootState) => state.global);

  // useState
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  // useEffect hooks
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  // helper function

  //submitting form
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    if (title.length === 0 || description.length === 0) {
      alert("Please fill in both fields beforing submitting :)");
    } else {
      const newPostObject = {
        title: title,
        description: description,
        latitude: global.position.lat,
        longitude: global.position.lng,
        user: auth._id,
        tags: tags,
      };
      await dispatch(newPost(newPostObject));
      await dispatch(togglePostForm());
    }
  }

  //removing hashtag
  function removeTag(index: number) {
    setTags(tags.filter((el, i) => i !== index));
  }

  //have to make a function to prevent enter key from submitting form so tags can use the enter key
  const checkKeyDown = (e: any) => {
    if (e.key === 'Enter') e.preventDefault();
  };

  //detect Enter key for adding tags
  function handleKeyDown(e: any) {
    // If user did not press enter key, return
    if (e.key !== "Enter") return;
    // Get the value of the input
    const value = e.target.value;
    // If the value is empty, return
    if (!value.trim()) return;
    // Add the value to the tags array
    setTags([...tags, value]);
    // Clear the input
    e.target.value = "";
  }

  return (
    <FormWrapper onSubmit={handleSubmit} onKeyDown={(e) => checkKeyDown(e)}>
      <HeaderContainer>
        <div className="headerItem"></div>
        <img className="headerItem logo" src="logo.png" />
        <div className="headerItem">
          <ClosedButton
            type="button"
            onClick={() => dispatch(togglePostForm())}
          >
            <FaIcons.FaTimes className="icon" />
          </ClosedButton>
        </div>
      </HeaderContainer>
      <h2 className="title">Mark Your Memory</h2>
      <input
        type="text"
        placeholder="title"
        className="inputField"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
      />
      <textarea
        placeholder="description"
        className="inputField description"
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setDescription(e.target.value)
        }
      />

      <TagsInputContainer>
        {tags.map((tag, index) => (
          <TagItem key={index}>
            <span className="text">{`#${tag}`}</span>
            <span className="close"
              onClick={() => {
                removeTag(index);
              }}>
              <FaIcons.FaTimes className="icon" />
            </span>
          </TagItem>
        ))}
        <TagsInput
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Add Tags to Your Post!"
        />
      </TagsInputContainer>

      <div className="submitButtonContainer">
        <SubmitButton type="submit">Submit</SubmitButton>
      </div>
    </FormWrapper>
  );
};

export default AddPostForm;

const FormWrapper = styled.form`
  text-align: center;
  position: relative;
  background-color: #c2e4cb;
  height: 100%;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: space-evenly;
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;
  border-color: #95c4a1;

  .title {
    font-size: 3rem;
    font-family: "Playfair Display", serif;
  }

  .inputField {
    margin: 0.5rem;
    font-size: 1.5rem;
    font-family: "Cormorant Garamond", serif;
    border-radius: 5px;
  }

  .description {
    height: 7rem;
  }

  .submitButtonContainer {
    display: flex;
    justify-content: center;
  }

  @media ${device.tablet} {
    height: auto;
    width: auto;
    align-item: center;

    .title {
      font-size: 2rem;
    }

    .description {
      height: 5rem;
    }
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;

  .headerItem {
    width: 33%;
    height: auto;
    display: flex;
    justify-content: flex-end;
  }
`;

const ClosedButton = styled.button`
  width: 3rem;
  height: 3rem;
  background-color: #739cf0;
  border-width: 0px;
  border-radius: 5px;

  .icon {
    color: white;
    font-size: 2rem;
  }

  @media ${device.tablet} {
    width: 1rem;
    height: 1rem;

    .icon {
      font-size: 1rem;
    }
  }
`;

const SubmitButton = styled.button`
  background-color: #739cf0;
  color: white;
  padding: 0.5rem;
  font-size: 2rem;
  border-width: 0px;
  font-family: "Montserrat", sans-serif;
  border-radius: 5px;

  @media ${device.tablet} {
    font-size: 1rem;
  }
`;

const TagsInputContainer = styled.div`
  padding: 0.5em;
  border-radius: 3px;
  width: min(80vw, 600px);
  margin-top: 1em;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5em;
`;

const TagItem = styled.div`
  background-color: white;
  display: inline-block;
  padding: 0.5em 0.75em;
  border-radius: 20px;
  font-family: "Montserrat", sans-serif;

  .closed {
    height: 20px;
    width: 20px;
    background-color: rgb(48, 48, 48);
    color: #fff;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.5em;
    font-size: 18px;
    cursor: pointer;
  }
`;

const TagsInput = styled.input`
  flex-grow: 1;
  padding: 0.5em 0;
  border: none;
  outline: none;
`;
