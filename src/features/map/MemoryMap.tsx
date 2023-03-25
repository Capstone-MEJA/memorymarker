import { GoogleMap } from "@react-google-maps/api";
import { fetchAllPosts, selectAllPosts } from "../../store/postsSlice";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import mapStyles from "./mapStyles";
import SingleMarker from "./SingleMarker";
import SingleInfoWindow from "./SingleInfoWindow";
import styled from "styled-components";
import AddPostForm from "../pages/AddPostForm";
import { IsPost } from "../../interface";
import { AppDispatch, RootState } from "../../store";
import EditPostForm from "../pages/EditPostForm";
import { togglePostForm, setSelectedPost, setLat, setLng, toggleSideBar } from "../../store/globalSlice";
import { fetchSingleUser } from "../../store/usersSlice";

const MemoryMap = (): JSX.Element => {
  //setting based variables/functions
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth);
  const global = useSelector((state: RootState) => state.global);
  const center = useRef(global.position);

  //useState
  //useEffect hooks
  const allPosts: IsPost[] = useSelector(selectAllPosts);
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  useEffect(() => {
    const findEditedPost: Function = (): IsPost | undefined => {
      if (global.selectedPost) {
        return allPosts.find((post: IsPost) => post._id === global.selectedPost?._id);
      }
      return undefined;
    };
    const editedPost = findEditedPost();
    if (editedPost) {
      dispatch(setSelectedPost(editedPost));
    }
  }, [allPosts]);

  //either this need to work or the center.current props need to be pass down
  useEffect(() => {
    center.current = global.position;
  },[global.position])

  //helper function
  const togglePostFormFunc = async(event: google.maps.MapMouseEvent) => {
    if(global.sideBar){
      await dispatch(toggleSideBar());
    }
    if (event !== null) {
      await dispatch(setLat(event.latLng?.lat()))
      await dispatch(setLng(event.latLng?.lng()))
      await dispatch(togglePostForm());
    }
  };

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
        {allPosts?.map((post: IsPost) => {
          return (
            <SingleMarker
              post={post}
              key={post._id}
            />
          );
        })}

        {/* conditionally render the infoWindow based on selected post */}
        {global.selectedPost ? (
          <SingleInfoWindow/>
        ) : null}

        {/* conditionally render the add post from when logged in and toggle is true */}
        {auth._id && global.postForm ? (
          <Form>
            <AddPostForm/>
          </Form>
        ) : null}

        {/* conditionally render the edit post from when logged in and toggle is true */}
        {auth._id && global.editPostForm && global.selectedPost ? (
          <Form>
            <EditPostForm/>
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
