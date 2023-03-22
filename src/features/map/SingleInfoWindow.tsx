// import { MouseEvent } from "react";
import { InfoWindow } from "@react-google-maps/api";
import { deletePost } from "../../store/postsSlice";
import { useDispatch } from "react-redux";
// import { IsPost } from "../../interface";
import { AppDispatch } from "../../store";
import { IsPost } from "../../interface";
// import { useState } from "react";

import { setSelectedPost, toggleEditPostForm } from "../../store/globalSlice";

interface singleInfoWindowProps {
  info: IsPost;
}


const SingleInfoWindow = (props: singleInfoWindowProps) => {
  const dispatch = useDispatch<AppDispatch>();

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
    </InfoWindow>
  );
};

export default SingleInfoWindow;
