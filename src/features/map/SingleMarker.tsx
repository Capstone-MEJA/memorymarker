import { Marker } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IPost } from "../../interface";
import { RootState } from "../../store";
import {
  setLat,
  setLng,
  setSelectedPost,
  toggleSideBar,
} from "../../store/globalSlice";

interface singleMarkerProps {
  post: IPost;
}

/**
 * Component for a single marker on the map
 * @returns A single marker on the map based on latitude and longitude location in the database for a post
 */

const SingleMarker = (props: singleMarkerProps) => {
  // setting base variables
  const dispatch = useDispatch();
  const global = useSelector((state: RootState) => state.global);

  return (
    <Marker
      position={{
        lat: Number(props.post.latitude),
        lng: Number(props.post.longitude),
      }}
      onClick={async () => {
        if (global.sideBar) {
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
