import { InfoWindow } from "@react-google-maps/api";
import { deletePost } from "../../store/postsSlice";
import { useDispatch } from "react-redux";
import { AppDispatch, IsPost } from "../../interface";


//ideally the only prop passed on should be post and the clickhandler function is located here instead of MemoryMap
const SingleInfoWindow = (props: {info: IsPost, clickHandler():void}) => {
  const dispatch = useDispatch<AppDispatch>();

  const deleteSinglePost = (id: string) => {
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
