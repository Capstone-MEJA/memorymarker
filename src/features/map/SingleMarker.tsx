import { Marker } from "@react-google-maps/api";
import { IsPost } from "../../interface";

//ideally the only prop passed on should be post and the clickhandler function is located here instead of MemoryMap
const SingleMarker = (props: { post: IsPost; clickHandler(): void }) => {
  return (
    <Marker
      position={{
        lat: Number(props.post.latitude),
        lng: Number(props.post.longitude),
      }}
      onClick={props.clickHandler}
    />
  );
};

export default SingleMarker;
