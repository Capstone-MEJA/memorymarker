import { GoogleMap } from "@react-google-maps/api";
import { fetchAllPosts, selectAllPosts } from "../../store/postsSlice";
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import mapStyles from "./mapStyles";
import SingleMarker from "./SingleMarker";
import SingleInfoWindow from "./SingleInfoWindow";
import styled from "styled-components";
import AddPostForm from "../pages/AddPostForm";
import EditPostForm from "../pages/EditPostForm";

const MemoryMap = (): JSX.Element => {
  //useDispatch need a type - define AppDispatch in the store
  const auth = useSelector((state: any) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const center = useRef({ lat: 40.7527277692752, lng: -73.97722734175942 });

  const allPosts = useSelector(selectAllPosts);

  //add a state that keep track of selected marker to render infoWindow
  //need to specific typeof selected to either be ISelected interface or null
  interface ISelected {
    _id: string;
    title: string;
    description: string;
    tags: [string];
    latitude: number;
    longitude: number;
  }
  const [selected, setSelected] = useState<ISelected | null>(null);
  const [togglePostForm, setTogglePostForm] = useState<boolean>(false);
  const [toggleEditPostForm, setToggleEditPostForm] = useState<boolean>(false);
  const [lat, setLat] = useState<number | null>(null);
  const [long, setLong] = useState<number | null>(null);

  //fetch all post
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  const togglePostFormFunc = (event: any) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    console.log(`lat: ${lat} lng: ${lng}`);
    setTogglePostForm(true);
    setLat(lat);
    setLong(lng);
  };

  const toggleEditPostFormFunc = (event: any) => {
    // const lat = event.latLng.lat();
    // const lng = event.latLng.lng();
    // console.log(`lat: ${lat} lng: ${lng}`);
    // setTogglePostForm(true);
    // setLat(lat);
    // setLong(lng);
    setToggleEditPostForm(true);
    console.log("clicked");
  };

  console.log(toggleEditPostForm);

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
        {/* please change the any */}
        {/* rendering all posts */}
        {allPosts?.map((post: any) => {
          return (
            <SingleMarker
              post={post}
              key={post._id}
              // jessie wants this fixed!
              clickHandler={() => {
                center.current = { lat: post.latitude, lng: post.longitude };
                setSelected(post);
              }}
            />
          );
        })}

        {/* conditional render the infoWindow based on selected post */}
        {selected ? (
          <SingleInfoWindow
            info={selected}
            clickHandler={() => {
              setSelected(null);
            }}
            toggleEditPostFormFunc={toggleEditPostFormFunc}
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

        {auth._id && toggleEditPostForm && selected ? (
          <Form>
            <EditPostForm
              setToggleEditPostForm={setToggleEditPostForm}
              info={selected}
            />
            {/* <AddPostForm
              lat={lat}
              long={long}
              setTogglePostForm={setTogglePostForm}
            /> */}
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
