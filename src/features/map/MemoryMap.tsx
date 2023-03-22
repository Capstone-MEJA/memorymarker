import { GoogleMap } from "@react-google-maps/api";
import { fetchAllPosts, selectAllPosts } from "../../store/postsSlice";
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import mapStyles from "./mapStyles";
import SingleMarker from "./SingleMarker";
import SingleInfoWindow from "./SingleInfoWindow";
import styled from "styled-components";
import AddPostForm from "../pages/AddPostForm";
import { IsPost } from "../../interface";
import { AppDispatch, RootState } from "../../store";
import EditPostForm from "../pages/EditPostForm";

const MemoryMap = (): JSX.Element => {
  //useDispatch need a type - define AppDispatch in the store
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  const center = useRef({ lat: 40.7527277692752, lng: -73.97722734175942 });

  //an array of objects
  const allPosts: IsPost[] = useSelector(selectAllPosts);

  //add a state that keep track of selected marker to render infoWindow
  const [selectedPost, setSelectedPost] = useState<IsPost | null>(null);
  const [togglePostForm, setTogglePostForm] = useState<boolean>(false);
  const [toggleEditPostForm, setToggleEditPostForm] = useState<boolean>(false);
  const [lat, setLat] = useState<number | null>(null);
  const [long, setLong] = useState<number | null>(null);

  //fetch all post
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  useEffect(() => {
    const findEditedPost: Function = (): IsPost | undefined => {
      if (selectedPost) {
        return allPosts.find((post: IsPost) => post._id === selectedPost._id);
      }
      return undefined;
    };
    const editedPost = findEditedPost();
    if (editedPost) {
      setSelectedPost(editedPost);
    }
  }, [allPosts]);

  const togglePostFormFunc = (event: google.maps.MapMouseEvent) => {
    if (event !== null) {
      const lat = event.latLng?.lat();
      const lng = event.latLng?.lng();
      setTogglePostForm(true);
      if (lat && lng) {
        setLat(lat);
        setLong(lng);
      }
    }
  };

  const toggleEditPostFormFunc = () => {
    setToggleEditPostForm(true);
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
              // jessie wants this fixed!
              clickHandler={() => {
                center.current = {
                  lat: Number(post.latitude),
                  lng: Number(post.longitude),
                };
                setSelectedPost(post);
              }}
            />
          );
        })}

        {/* conditionally render the infoWindow based on selected post */}
        {selectedPost ? (
          <SingleInfoWindow
            info={selectedPost}
            clickHandler={() => {
              setSelectedPost(null);
            }}
            toggleEditPostFormFunc={toggleEditPostFormFunc}
          />
        ) : null}

        {/* conditionally render the add post from when logged in and toggle is true */}
        {auth._id && togglePostForm ? (
          <Form>
            <AddPostForm
              lat={Number(lat)}
              long={Number(long)}
              setTogglePostForm={setTogglePostForm}
            />
          </Form>
        ) : null}

        {/* conditionally render the edit post from when logged in and toggle is true */}
        {auth._id && toggleEditPostForm && selectedPost ? (
          <Form>
            <EditPostForm
              setToggleEditPostForm={setToggleEditPostForm}
              info={selectedPost}
            />
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
