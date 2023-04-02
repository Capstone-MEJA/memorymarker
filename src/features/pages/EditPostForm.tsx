import { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { updatePost } from "../../store/postsSlice";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import { toggleEditPostForm } from "../../store/globalSlice";
import { useSelector } from "react-redux";
import { device } from "../../styles/global";
import axios from "axios";

/**
 * Component for editing a post
 * @returns A form for a logged in user to edit a post they have previously made
 */

const EditPostForm = () => {
  // setting base variables
  const dispatch = useDispatch<AppDispatch>();
  const global = useSelector((state: RootState) => state.global);

  // useState
  const [title, setTitle] = useState<string>(global.selectedPost!.title);
  const [description, setDescription] = useState<string>(
    global.selectedPost!.description
  );

  const [changePhoto, setChangePhoto] = useState(false);

  // helper function
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const updateObj: {
      _id: string;
      title: string;
      description: string;
      imageId?: object;
    } = {
      _id: global.selectedPost!._id,
      title: title,
      description: description,
    };

    if (event.target.image) {
      const submitImage = async () => {
        const { data } = await axios.postForm("/api/images", {
          postId: global.selectedPost!._id,
          image: event.target.image.files[0],
        });

        updateObj.imageId = data;
        dispatch(updatePost(updateObj));
      };
      submitImage();
    } else {
      // console.log(updateObj)
      dispatch(updatePost(updateObj));
    }
  }

  function handleDelete() {
    const deleteImage = async () => {
      await axios.delete(`/api/images/${global.selectedPost?.imageId._id}`);
      dispatch(updatePost({_id: global.selectedPost?._id, imageId: {delete: true}}))
    };
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <HeaderContainer>
        <div className="headerItem"></div>
        <img className="headerItem" src="logo.png"></img>
        <div className="headerItem">
          <ClosedButton
            type="button"
            onClick={() => dispatch(toggleEditPostForm())}
          >
            <FaIcons.FaTimes className="icon" />
          </ClosedButton>
        </div>
      </HeaderContainer>
      <h2 className="title">Edit Post</h2>
      <input
        type="text"
        className="inputField"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
        value={title}
      />
      <textarea
        className="inputField description"
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setDescription(e.target.value)
        }
        value={description}
      />
      <div>
        {changePhoto ? (
          <input type="file" name="image" />
        ) : (
          <SubmitButton
            type="button"
            onClick={() => {
              setChangePhoto(true);
            }}
          >
            {" "}
            Change Photo{" "}
          </SubmitButton>
        )}
      </div>
      <div>
        <SubmitButton type="button" onClick={handleDelete}>
          Delete Photo
        </SubmitButton>
      </div>
      <div className="submitButtonContainer">
        <SubmitButton type="submit">Submit</SubmitButton>
      </div>
    </FormWrapper>
  );
};

export default EditPostForm;

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
