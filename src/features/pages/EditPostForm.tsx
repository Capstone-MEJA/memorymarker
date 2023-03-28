import { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { updatePost } from "../../store/postsSlice";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import { toggleEditPostForm } from "../../store/globalSlice";
import { useSelector } from "react-redux";
import { device } from "../../styles/global";

const EditPostForm = () => {
  //setting based variables/functions
  const dispatch = useDispatch<AppDispatch>();
  const global = useSelector((state: RootState) => state.global);

  //useState
  const [title, setTitle] = useState<string>(global.selectedPost!.title);
  const [description, setDescription] = useState<string>(
    global.selectedPost!.description
  );
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

  return (
    <FormWrapper onSubmit={() => handleSubmit(global.selectedPost!._id)}>
      <HeaderContainer>
        <div className="headerItem"></div>
        <img className="headerItem" src="logo.png"></img>
        <div className="headerItem">
          <ClosedButton type="button" onClick={() => dispatch(toggleEditPostForm())}>
            <FaIcons.FaTimes className="icon" />
          </ClosedButton>
        </div>
      </HeaderContainer>
      <h2 className="title">Edit post</h2>
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
      {/* <input
          type="text"
          placeholder="tag"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTag(e.target.value)
          }
        /> */}
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
  background-color: #C2E4CB;
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
  }

  .description {
    height: 7rem;
  }

  .submitButtonContainer {
    display: flex;
    justify-content: center;
  }

  @media ${device.tablet}{
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
`

const ClosedButton = styled.button`
  width: 3rem;
  height: 3rem;
  background-color: #739CF0;
  border-width: 0px;
  border-radius: 5px;

  .icon {
    color: white;
    font-size: 2rem;
  }

  @media ${device.tablet}{
    width: 1rem;
    height: 1rem;

    .icon {
      font-size: 1rem;
    }
  }
`

const SubmitButton = styled.button`
  background-color: #739CF0;
  color: white;
  padding: 0.5rem;
  font-size: 2rem;
  border-width: 0px;
  font-family: "Montserrat", sans-serif;
  border-radius: 5px;

  @media ${device.tablet} {
    font-size: 1rem;
  }
`