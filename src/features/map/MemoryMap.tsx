import { GoogleMap } from "@react-google-maps/api";
import { fetchAllPosts, selectAllPosts } from "../../store/postsSlice";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import mapStyles from "./mapStyles";
import SingleMarker from "./SingleMarker";
import SingleInfoWindow from "./SingleInfoWindow";
import styled from "styled-components";
import AddPostForm from "../pages/AddPostForm";
import { IPost } from "../../interface";
import { AppDispatch, RootState } from "../../store";
import EditPostForm from "../pages/EditPostForm";
import {
  togglePostForm,
  setSelectedPost,
  setLat,
  setLng,
  toggleSideBar,
} from "../../store/globalSlice";

/**
 * Component for loading google map
 * @returns The google map with markers for every post in the database and options to create or edit a post if logged in
 */

const MemoryMap = (): JSX.Element => {
  // setting base variables
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth);
  const global = useSelector((state: RootState) => state.global);
  const center = useRef(global.position);

  // useEffect hooks
  const allPosts: IPost[] = useSelector(selectAllPosts);
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  useEffect(() => {
    const findEditedPost: Function = (): IPost | undefined => {
      if (global.selectedPost) {
        return allPosts.find(
          (post: IPost) => post._id === global.selectedPost?._id
        );
      }
      return undefined;
    };
    const editedPost = findEditedPost();
    if (editedPost) {
      dispatch(setSelectedPost(editedPost));
    }
  }, [allPosts]);

  useEffect(() => {
    center.current = global.position;
  }, [global.position]);

  // helper function
  const togglePostFormFunc = async (event: google.maps.MapMouseEvent) => {
    if (global.sideBar) {
      await dispatch(toggleSideBar());
    }
    if (event !== null) {
      await dispatch(setSelectedPost(null));
      await dispatch(setLat(event.latLng?.lat()));
      await dispatch(setLng(event.latLng?.lng()));
      await dispatch(togglePostForm());
    }
  };

  // typescript single use interface
  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
    clickableIcons: false,
  };

  return (
    <div>
      <GoogleMap
        zoom={15}
        center={center.current}
        mapContainerStyle={{ width: "100vw", height: "100vh" }}
        options={options}
        onClick={(event) => togglePostFormFunc(event)}
      >
        {allPosts?.map((post: IPost) => {
          return <SingleMarker post={post} key={post._id} />;
        })}

        {/* conditionally render an infoWindow based on selected post */}
        {global.selectedPost ? <SingleInfoWindow /> : null}

        {/* conditionally render the add post form when logged in and toggle is set to true */}
        {auth._id && global.postForm ? (
          <Form>
            <AddPostForm />
          </Form>
        ) : null}

        {/* conditionally render the edit post from when logged in and toggle is set to true */}
        {auth._id && global.editPostForm && global.selectedPost ? (
          <Form>
            <EditPostForm />
          </Form>
        ) : null}
      </GoogleMap>
    </div>
  );
};

export default MemoryMap;

const Form = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
