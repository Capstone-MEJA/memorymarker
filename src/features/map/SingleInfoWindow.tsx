import { InfoWindow } from "@react-google-maps/api";
import { deletePost } from "../../store/postsSlice";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useSelector } from "react-redux";
import { setSelectedPost, toggleEditPostForm } from "../../store/globalSlice";

const SingleInfoWindow = () => {
  //setting based variables/functions
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth);
  const global = useSelector((state: RootState) => state.global);

  //useState
  //useEffect hooks
  //helper function
  const deleteSinglePost = (id: string) => {
    // closes info window
    dispatch(setSelectedPost(null));
    // deletes marker & post
    dispatch(deletePost(id));
  };

  return (
    <InfoWindow
      position={{
        lat: global.selectedPost!.latitude,
        lng: global.selectedPost!.longitude,
      }}
      onCloseClick={() => dispatch(setSelectedPost(null))}
    >
      <div>
        <h2>{global.selectedPost!.title}</h2>
        <p>Posted by: {global.selectedPost!.user.username}</p>
        <p>{global.selectedPost!.description}</p>

        {auth._id === global.selectedPost!.user._id ? (
          <div>
            <button onClick={() => dispatch(toggleEditPostForm())}>
              Edit Post
            </button>
            <button
              onClick={() => {
                deleteSinglePost(global.selectedPost!._id);
              }}
            >
              Delete Post
            </button>
          </div>
        ) : null}
      </div>
    </InfoWindow>
  );
};

export default SingleInfoWindow;
