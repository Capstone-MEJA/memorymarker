import { useLoadScript } from "@react-google-maps/api";
import MemoryMap from "./MemoryMap";

/**
 * Component for loading fetching map by api key
 * @returns A map, loading message, or an error
 */

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

export default Map;
