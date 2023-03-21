import { GoogleMap, InfoWindow } from "@react-google-maps/api";
import { fetchAllPosts, selectAllPosts } from "../../store/postsSlice";
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import mapStyles from "./mapStyles";
import SingleMarker from "./SingleMarker";
import styled from "styled-components";
import AddPostForm from "../pages/AddPostForm";

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
  const [lat, setLat] = useState<number | null>(null);
  const [long, setLong] = useState<number | null>(null);

  //fetch all post
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchSinglePost(selected._id));
  // }, [selected]);

  const togglePostFormFunc = (event: any) => {
    //get location of click and set it to lat lng
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    console.log(`lat: ${lat} lng: ${lng}`);
    setTogglePostForm(true);
    setLat(lat);
    setLong(lng);

    // toggle a form
    // on form submit it will add a marker to the map
    // dispatch an action to add a new post to the database
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
          <InfoWindow
            position={{ lat: selected.latitude, lng: selected.longitude }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>{selected.title}</h2>
              <p>{selected.description}</p>
            </div>
          </InfoWindow>
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
  z-index: 1;
  text-align: center;
  font-size: 50px;
  color: red;
  position: relative;
  background-color: white;
  width: 500px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  margin: auto;
`;
