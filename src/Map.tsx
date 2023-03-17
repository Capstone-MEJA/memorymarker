import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

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
  return (
    <div>
      <GoogleMap
        zoom={15}
        center={{ lat: 40.7527277692752, lng: -73.97722734175942 }}
        mapContainerStyle={{ width: "100vw", height: "100vh" }}
      >
        <Marker position={{ lat: 40.7527277692752, lng: -73.97722734175942 }} />
      </GoogleMap>
    </div>
  );
};

export default Map;
