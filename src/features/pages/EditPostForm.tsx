import { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { updatePost } from "../../store/postsSlice";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import { toggleEditPostForm } from "../../store/globalSlice";
import { useSelector } from "react-redux";
import { device } from "../../styles/global";

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

  // helper function
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

  return (
    <FormWrapper onSubmit={() => handleSubmit(global.selectedPost!._id)}>
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
