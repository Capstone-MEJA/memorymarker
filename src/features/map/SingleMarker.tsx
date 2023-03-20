import { Marker } from "@react-google-maps/api";

const SingleMarker = (props: any) => {
  return (
    <Marker
      position={{ lat: props.post.latitude, lng: props.post.longitude }}
      onClick={props.clickHandler}
    />
  );
};

export default SingleMarker;
