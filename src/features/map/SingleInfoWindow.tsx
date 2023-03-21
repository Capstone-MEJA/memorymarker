import { InfoWindow } from "@react-google-maps/api";

const SingleInfoWindow = (props: any) => {
  return (
    <InfoWindow
      position={{ lat: props.info.latitude, lng: props.info.longitude }}
      onCloseClick={props.clickHandler}
    >
      <div>
        <h2>{props.info.title}</h2>
        <p>{props.info.description}</p>
      </div>
    </InfoWindow>
  );
};

export default SingleInfoWindow;
