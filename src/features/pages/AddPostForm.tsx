import { useState, ChangeEvent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import axios from "axios";
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

  // useEffect hooks
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  // helper function
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (title.length === 0 || description.length === 0) {
      alert("Please fill in both fields before submitting :)");
    } else {
      if (e.target.image.files.length !== 0) {
        const submitImage = async () => {
          const { data } = await axios.postForm("/api/images", {
            image: e.target.image.files[0],
          });
          dispatch(
            newPost({
              title: title,
              description: description,
              latitude: global.position.lat,
              longitude: global.position.lng,
              user: auth._id,
              imageId: data,
            })
          );
          dispatch(togglePostForm());
        };
        submitImage();
      } else {
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
    }
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <HeaderContainer>
        <div className="headerItem"></div>
        <img className="logo" src="logo.png" />
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
        placeholder="Title"
        className="inputField"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
      />
      <textarea
        placeholder="Description"
        className="inputField description"
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setDescription(e.target.value)
        }
      />
      <UploadImage type="file" name="image" accept="image/png, image/jpeg" />

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
    border: 1px solid grey;
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

const UploadImage = styled.input`
  margin: 8px;
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
