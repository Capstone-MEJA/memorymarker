import { Marker } from "@react-google-maps/api";
import { useDispatch } from "react-redux";
import { IsPost } from "../../interface";
import { setLat, setLng, setSelectedPost } from "../../store/globalSlice";

interface singleMarkerProps {
  post: IsPost;
}

const SingleMarker = (props: singleMarkerProps) => {
  //setting based variables/functions
  const dispatch = useDispatch();

  //useState
  //useEffect hooks
  //helper function
  return (
    <Marker
      position={{
        lat: Number(props.post.latitude),
        lng: Number(props.post.longitude),
      }}
      onClick={async() => {
        await dispatch(setLat(props.post.latitude));
        await dispatch(setLng(props.post.longitude));
        await dispatch(setSelectedPost(props.post));
      }}
    />
  );
};

export default SingleMarker;
