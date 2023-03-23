import { Marker } from "@react-google-maps/api";
import { useDispatch } from "react-redux";
import { IsPost } from "../../interface";
import { setSelectedPost } from "../../store/globalSlice";

interface singleMarkerProps {
  post: IsPost;
  // currentCenter: {
  //   lat: number,
  //   lng: number,
  // }
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
      onClick={() => {
        // props.currentCenter = {
        //   lat: Number(props.post.latitude),
        //   lng: Number(props.post.longitude),
        // }
        dispatch(setSelectedPost(props.post));
      }}
    />
  );
};

export default SingleMarker;
