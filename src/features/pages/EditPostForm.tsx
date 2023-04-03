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
  const [toggleDelete, setToggleDelete] = useState(
    global.selectedPost!.imageId ? "delete" : ""
  );

  // helper function
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
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
      if (event.target.image.files.length > 0) {
        const submitImage = async () => {
          const { data } = await axios.postForm("/api/images", {
            postId: global.selectedPost!._id,
            image: event.target.image.files[0],
          });

          updateObj.imageId = data;
          console.log(updateObj);
          dispatch(updatePost(updateObj));
          dispatch(toggleEditPostForm());
        };
        submitImage();
      } else {
        dispatch(updatePost(updateObj));
        dispatch(toggleEditPostForm());
      }
    } else {
      // console.log(updateObj)
      dispatch(updatePost(updateObj));
      dispatch(toggleEditPostForm());
    }
  }

  function handleDelete() {
    console.log("HIT HELLO");
    const deleteImage = async () => {
      await axios.delete(`/api/images/${global.selectedPost?.imageId._id}`);
      dispatch(
        updatePost({ _id: global.selectedPost?._id, imageId: { delete: true } })
      );
      setToggleDelete("deleted");
    };
    deleteImage();
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <HeaderContainer>
        <div className="headerItem"></div>
        <img className="logo" src="logo.png"></img>
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
      <EditDeleteWrapper>
        <div>
          {changePhoto ? (
            <input type="file" name="image" />
          ) : (
            <ChangeDeletePhotoButton
              type="button"
              onClick={() => {
                setChangePhoto(true);
              }}
            >
              Change or Add Photo
            </ChangeDeletePhotoButton>
          )}
        </div>
        <div>
          {!toggleDelete ? (
            ""
          ) : toggleDelete === "delete" ? (
            <ChangeDeletePhotoButton type="button" onClick={handleDelete}>
              Delete Photo
            </ChangeDeletePhotoButton>
          ) : (
            <SubmitButton type="button">Deleted!</SubmitButton>
          )}
        </div>
      </EditDeleteWrapper>
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
  border-radius: 8px;
  border-width: 2px;
  border-style: solid;
  border-color: #95c4a1;

  .title {
    font-size: 2rem;
    font-family: "Playfair Display", serif;
    color: #486572;
    margin-bottom: 1rem;
  }

  .inputField {
    margin: 0.5rem;
    font-size: 1rem;
    font-family: "Cormorant Garamond", serif;
    border-radius: 5px;
  }

  .description {
    height: 7rem;
    font-size: 1rem;
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
      font-size: 2.5rem;
    }
    .inputField {
      font-size: 1.5rem;
    }
    .description {
      height: 5rem;
      font-size: 1.5rem;
    }

    @media ${device.laptop}{
      width: 60%;
    }
    
    @media (min-width: 1500px) {
      height: auto;
      width: auto;
      align-item: center;
  
      .title {
        font-size: 5rem;
      }
      .inputField {
        font-size: 3rem;
      }
  
      .description {
        height: 8rem;
        font-size: 3rem;
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
  .logo {
    width: 10rem;
  }
  @media ${device.tablet} {
    .logo {
      width: 12rem;
    }
  @media ${device.laptop} and ${device.desktop} {
    .logo {
      width: 14rem;
    }
`;

const ClosedButton = styled.button`
  width: 2rem;
  height: 2rem;
  background-color: #739cf0;
  border-width: 0px;
  border-radius: 5px;

  .icon {
    color: whitesmoke;
    font-size: 1.5rem;
    margin-top: 0.25rem;
  }

  @media ${device.tablet} {
    width: 2.5rem;
    height: 2.5rem;

    .icon {
      font-size: 2rem;
      margin-bottom: 0.25rem;
    }
  }
`;

const SubmitButton = styled.button`
  background-color: #739cf0;
  color: whitesmoke;
  padding: 5px;
  font-size: 20px;
  border-width: 0px;
  font-family: "Montserrat", sans-serif;
  border-radius: 5px;
  border: none;
  margin: 10px 2rem 20px 2rem;
  width: 13rem;

  @media ${device.laptop} {
    margin: 20px 10px 20px 15px;
    height: 4rem;
    width: 10rem;
    font-size: 30px;
  }
  @media (min-width: 1500px) {
    margin: 20px 10px 20px 15px;
    height: 4rem;
    width: 10rem;
    font-size: 30px;
  }
`;

const EditDeleteWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  justfy-content: center;
  margin-bottom: 5px;
  margin-top: 5px;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: center;
  }
`;

const ChangeDeletePhotoButton = styled(SubmitButton)`
  word-break: keep-all;
  font-size: 1rem;
  margin-bottom: 0.5rem;

  @media ${device.tablet} {
    font-size: 1rem;
    margin: 1rem;
  }
`;
