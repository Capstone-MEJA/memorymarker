import { InfoWindow } from "@react-google-maps/api";
import { deletePost } from "../../store/postsSlice";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useSelector } from "react-redux";
import { setSelectedPost, toggleEditPostForm } from "../../store/globalSlice";
import styled from "styled-components";
import UpVote from "./UpVote";

/**
 * Component for loading a single info window when a marker is clicked
 * @returns A single info window with the option to edit or delete that post if the user owns the post
 */

const SingleInfoWindow = () => {
  // setting base variables
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth);
  const global = useSelector((state: RootState) => state.global);

  // helper function
  const deleteSinglePost = (id: string) => {
    // closes info window
    dispatch(setSelectedPost(null));
    // deletes marker & post
    dispatch(deletePost(id));
  };

  /*
  When you get the buffer string from Mongo, it's an array of numbers inside a nested object;
  
  Convert the array of numbers to a typed array using the Uint8Array method. This will return an array of 8-bit unsigned integers.
  
  Use the String.fromCharCode() method to convert the Unicode values into a string of characters. 

  Now, to obtain the base64 string, pass the string of characters to window.btoa() method which will return a base-64 encoded ASCII string.

  Reference: https://medium.com/@koteswar.meesala/convert-array-buffer-to-base64-string-to-display-images-in-angular-7-4c443db242cd
  */

  const createImageString = (array: ArrayBufferLike) => {
    const typedArray = new Uint8Array(array);
    const stringChar = typedArray.reduce((data, byte) => {
      return data + String.fromCharCode(byte);
    }, "");
    return window.btoa(stringChar);
  };

  return (
    <InfoWindow
      position={{
        lat: global.selectedPost!.latitude,
        lng: global.selectedPost!.longitude,
      }}
      onCloseClick={() => dispatch(setSelectedPost(null))}
    >
      <InfoWindowWrapper>
        {global.selectedPost!.imageId ? (
          <Image
            src={
              "data:image/png;base64," +
              createImageString(global.selectedPost!.imageId.img.data.data)
            }
          />
        ) : (
          ""
        )}
        <PostTitle>{global.selectedPost!.title}</PostTitle>
        <PostText>{global.selectedPost!.description}</PostText>
        <PostText>Posted By: {global.selectedPost!.user.username}</PostText>

        <UpVote />

        {auth._id === global.selectedPost!.user._id ? (
          <ButtonWrapper>
            <Button onClick={() => dispatch(toggleEditPostForm())}>Edit</Button>
            <Button
              onClick={() => {
                deleteSinglePost(global.selectedPost!._id);
              }}
            >
              Delete
            </Button>
          </ButtonWrapper>
        ) : null}
      </InfoWindowWrapper>
    </InfoWindow>
  );
};

export default SingleInfoWindow;

const InfoWindowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Image = styled.img`
display: flex;
width: 30rem;
`

const PostTitle = styled.h2`
  font-family: "Playfair Display", serif;
  padding: 0.5rem;
`;

const PostText = styled.p`s
  font-family: "Cormorant Garamond", serif;
  padding: 0.5rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1em;
`;

const Button = styled.button`
  font-family: "Montserrat", sans-serif;
  padding: 8px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  text-align: center;
  width: 60px;
  background-color: #739cf0;
  color: white;
`;
