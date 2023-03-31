import { InfoWindow } from "@react-google-maps/api";
import { deletePost } from "../../store/postsSlice";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useSelector } from "react-redux";
import { setSelectedPost, toggleEditPostForm } from "../../store/globalSlice";
import styled from "styled-components";

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

  return (
    <InfoWindow
      position={{
        lat: global.selectedPost!.latitude,
        lng: global.selectedPost!.longitude,
      }}
      onCloseClick={() => dispatch(setSelectedPost(null))}
    >
      <InfoWindowWrapper>
        <PostTitle>{global.selectedPost!.title}</PostTitle>
        <PostText>{global.selectedPost!.description}</PostText>
        <PostText>Posted By: {global.selectedPost!.user.username}</PostText>

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
