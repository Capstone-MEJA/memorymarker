import { InfoWindow } from "@react-google-maps/api";
import { deletePost } from "../../store/postsSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";

const SingleInfoWindow = (props: any) => {
  const dispatch = useDispatch<AppDispatch>();

  const deleteSinglePost = (id: any) => {
    // closes info window
    props.clickHandler()
    // deletes marker & post
    dispatch(deletePost(id));
  };

  return (
    <InfoWindow
      position={{ lat: props.info.latitude, lng: props.info.longitude }}
      onCloseClick={props.clickHandler}
    >
      <div>
        <h2>{props.info.title}</h2>
        <p>{props.info.description}</p>
        <button>Edit Post</button>
        <button onClick={() => {deleteSinglePost(props.info._id)}}>Delete Post</button>
      </div>
    </InfoWindow>
  );
};

export default SingleInfoWindow;
