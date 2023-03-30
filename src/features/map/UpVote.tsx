import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useSelector } from "react-redux";
import { favoritePost } from "../../store/postsSlice";

const UpVote = () => {
  const dispatch = useDispatch<AppDispatch>();
  const global = useSelector((state: RootState) => state.global);

const likePost = (id: string) => {
    dispatch(favoritePost(id));
}


  return (
  <button onClick={() => {likePost(global.selectedPost!._id)}}>Like</button>)
};

export default UpVote;
