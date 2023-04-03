import { useDispatch } from "react-redux";
import { useRef } from "react";
import { AppDispatch, RootState } from "../../store";
import { useSelector } from "react-redux";
import { favoritePost } from "../../store/postsSlice";
import styled from "styled-components";

const UpVote = () => {
  const dispatch = useDispatch<AppDispatch>();
  const global = useSelector((state: RootState) => state.global);
  const auth = useSelector((state: RootState) => state.auth);
  const likeStatus = useRef<null | HTMLButtonElement>(null);

  const likePost = (id: string, userId: string) => {
    const likeObj = { id, userId, like: 0 };
    if (likeStatus.current!.textContent === "♡") {
      likeObj.like = 1;
    } else {
      likeObj.like = -1;
    }
    dispatch(favoritePost(likeObj));
  };

  return (
    <Wrapper>
      <Button
        onClick={() => {
          likePost(global.selectedPost!._id, auth._id);
        }}
        ref={likeStatus}
      >
        {global.selectedPost!.favoritedUsers.includes(auth._id)
          ? "♥️"
          : "♡"}
      </Button>
      <LikeCount>
        {global.selectedPost!.favoriteCount}{" "}
        {global.selectedPost!.favoriteCount === 1 ? "Like" : "Likes"}{" "}
      </LikeCount>
    </Wrapper>
  );
};

export default UpVote;

const Wrapper = styled.section`
  display: flex;
  margin-bottom: 0.5rem;
  align-content: center;
  align-items: center;
`;

const Button = styled.button`
  font-family: "Montserrat", sans-serif;
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  text-align: center;
  background-color: #739cf0;
  color: white;
  height: 2rem;
`;

const LikeCount = styled.p`
  margin-left: 1rem;
  font-family: "Montserrat", sans-serif;
`;
