import { GoogleMap } from "@react-google-maps/api";
import { fetchAllPosts, selectAllPosts } from "../../store/postsSlice";
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import mapStyles from "./mapStyles";
import SingleMarker from "./SingleMarker";
import SingleInfoWindow from "./SingleInfoWindow";
import styled from "styled-components";
import AddPostForm from "../pages/AddPostForm";
import { AppDispatch, IsPost, isStore } from "../../interface";

const MemoryMap = (): JSX.Element => {
  //useDispatch need a type - define AppDispatch in the store
  const auth = useSelector((state: isStore) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  const center = useRef({ lat: 40.7527277692752, lng: -73.97722734175942 });

  const allPosts:IsPost[] = useSelector(selectAllPosts);

  //add a state that keep track of selected marker to render infoWindow
  const [selectedPost, setSelectedPost] = useState<IsPost | null>(null);
  const [togglePostForm, setTogglePostForm] = useState<boolean>(false);
  const [lat, setLat] = useState<number | null>(null);
  const [long, setLong] = useState<number | null>(null);

  //fetch all post
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  //clicker on the SingleMarker component
  // event: should be some google.maps.MapMouseEvent
  const togglePostFormFunc = (event: any) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    console.log(`lat: ${lat} lng: ${lng}`);
    setTogglePostForm(true);
    setLat(lat);
    setLong(lng);
  };
  console.log(lat);
  console.log(long);

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
                center.current = { lat: post.latitude, lng: post.longitude };
                setSelectedPost(post);
              }}
            />
          );
        })}

        {/* conditional render the infoWindow based on selected post */}
        {selectedPost ? (
          <SingleInfoWindow
            info={selectedPost}
            clickHandler={() => {
              setSelectedPost(null);
            }}
          />
        ) : null}

        {auth._id && togglePostForm ? (
          <Form>
            <AddPostForm
              lat={lat}
              long={long}
              setTogglePostForm={setTogglePostForm}
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
