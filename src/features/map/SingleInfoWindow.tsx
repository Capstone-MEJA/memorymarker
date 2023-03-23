import { InfoWindow } from "@react-google-maps/api";
import { deletePost } from "../../store/postsSlice";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { IsPost } from "../../interface";
import { useSelector } from "react-redux";
import { setSelectedPost, toggleEditPostForm } from "../../store/globalSlice";

interface singleInfoWindowProps {
  info: IsPost;
}

const SingleInfoWindow = (props: singleInfoWindowProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth);

  const deleteSinglePost = (id: string) => {
    // closes info window
    dispatch(setSelectedPost(null));
    // deletes marker & post
    dispatch(deletePost(id));
  };

  return (
    <InfoWindow
      position={{ lat: props.info.latitude, lng: props.info.longitude }}
      onCloseClick={() => dispatch(setSelectedPost(null))}
    >
      <div>
        <h2>{props.info.title}</h2>
        <p>{props.info.description}</p>
        <p>{props.info.user.username}</p>
        {auth._id === props.info.user._id ?
          <div>
            <button onClick={() => dispatch(toggleEditPostForm())}>
              Edit Post
            </button>
            <button
              onClick={() => {
                deleteSinglePost(props.info._id);
              }}
            >
              Delete Post
            </button>
          </div>
          : null}
      </div>
    </InfoWindow>
  );
};

export default SingleInfoWindow;
