import { MouseEvent } from "react";
import { InfoWindow } from "@react-google-maps/api";
import { deletePost } from "../../store/postsSlice";
import { useDispatch } from "react-redux";
// import { IsPost } from "../../interface";
import { AppDispatch, RootState } from "../../store";
import { IsPost } from "../../interface";
import { useSelector } from "react-redux";
// import { useState } from "react";

//ideally the only prop passed on should be post and the clickhandler function is located here instead of MemoryMap
const SingleInfoWindow = (props: {
  info: IsPost;
  clickHandler(): void;
  toggleEditPostFormFunc: (e: MouseEvent<HTMLButtonElement>) => void;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth);

  const deleteSinglePost = (id: string) => {
    // closes info window
    props.clickHandler();
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
        <p>{props.info.user.username}</p>
        {auth._id === props.info.user._id ? 
        <div>
        <button onClick={(event) => props.toggleEditPostFormFunc(event)}>
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
    : null }
      </div>
    </InfoWindow>
  );
};

export default SingleInfoWindow;
