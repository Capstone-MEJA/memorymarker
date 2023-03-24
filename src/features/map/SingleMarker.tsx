import { Marker } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IsPost } from "../../interface";
import { RootState } from "../../store";
import { setLat, setLng, setSelectedPost, toggleSideBar } from "../../store/globalSlice";

interface singleMarkerProps {
  post: IsPost;
}

const SingleMarker = (props: singleMarkerProps) => {
  //setting based variables/functions
  const dispatch = useDispatch();
  const global = useSelector((state: RootState) => state.global)

  //useState
  //useEffect hooks
  //helper function
  return (
    <Marker
      position={{
        lat: Number(props.post.latitude),
        lng: Number(props.post.longitude),
      }}
      onClick={async () => {
        if(global.sideBar){
          await dispatch(toggleSideBar());
        }
        await dispatch(setLat(props.post.latitude));
        await dispatch(setLng(props.post.longitude));
        await dispatch(setSelectedPost(props.post));
      }}
    />
  );
};

export default SingleMarker;
