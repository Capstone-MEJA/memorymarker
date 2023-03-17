import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { fetchAllPosts, selectAllPosts } from "./store/postsSlice";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from "./store";

const Map = (): JSX.Element => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
  });

  if (loadError) {
    console.log("There was a loading error...");
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return <MemoryMap />;
  }
};

const MemoryMap = (): JSX.Element => {
  //useDispatch need a type - define AppDispatch in the store
  const dispatch = useDispatch<AppDispatch>();

  const allPosts: [object] = useSelector(selectAllPosts);

  //add a state that keep track of selected marker to render infoWindow
  const [selected, setSelected] = useState({});

  //fetch all post
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchSinglePost(selected._id));
  // }, [selected]);

  const addMarker = (event: any) => {
    //get location of click and set it to lat lng
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    console.log(`lat: ${lat} lng: ${lng}`);

  }

  return (
    <div>
      <GoogleMap
        zoom={15}
        center={{ lat: 40.7527277692752, lng: -73.97722734175942 }}
        mapContainerStyle={{ width: "100vw", height: "100vh" }}
        onClick={(event) => addMarker(event)}
      >
        <Marker position={{ lat: 40.7527277692752, lng: -73.97722734175942 }} />
        {/* please change the any */}
        {/* rendering all posts */}
        {allPosts?.map((post: any) => {
          return (
            <Marker key={post._id} position={{ lat: post.latitude, lng: post.longitude }}
              onClick={() => {
                setSelected(post);
                console.log("hi", selected);
              }} />
          )
        })}

        {/* conditional render the infoWindow based on selected post */}
        {/* {selected ? (
          <InfoWindow position={{ lat: selected.latitude, lng: selected.longitude }}
            onCloseClick={() => {
              setSelected(null)
            }}>
            <div>
              <h2>{selected.title}</h2>
              <p>{selected.description}</p>
            </div>
          </InfoWindow>
        ) : null} */}

      </GoogleMap>
    </div>
  );
};

export default Map;
