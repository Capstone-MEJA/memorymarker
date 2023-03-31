import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useSelector } from "react-redux";
import { favoritePost } from "../../store/postsSlice";
import styled from "styled-components";

const UpVote = () => {
  const dispatch = useDispatch<AppDispatch>();
  const global = useSelector((state: RootState) => state.global);
  const auth = useSelector((state: RootState) => state.auth);

  const likePost = (id: string, userId: string) => {
    dispatch(favoritePost({id, userId}));
  };

  return (
    <Wrapper>
      <Button
        onClick={() => {
          likePost(global.selectedPost!._id, auth._id);
        }}
      >
      {global.selectedPost!.favoritedUsers.includes(auth._id) ? "Liked!" : "♡" }
      </Button>
      <LikeCount>{global.selectedPost!.favoriteCount} {global.selectedPost!.favoriteCount === 1 ? "Like" : "Likes"} </LikeCount>
    </Wrapper>
  );
};

export default UpVote;

const Wrapper = styled.section`
display: flex;
margin-bottom: 0.5rem;
align-content: center;
align-items: center;
`

const Button = styled.button`
  font-family: "Montserrat", sans-serif;
  padding: 0.5rem;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  text-align: center;
  background-color: #739CF0;
  color: white;
  height: 2rem;
`;

const LikeCount = styled.p`
margin-left: 1rem;
font-family: "Montserrat", sans-serif;

`