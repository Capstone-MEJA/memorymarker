import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useState, useEffect } from "react";
import {
  fetchAllPosts,
  deletePost,
  selectAllPosts,
  updatePost,
} from "../../store/postsSlice";
import { IPost } from "../../interface";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../styles/global";

/**
 * Component a user to manage all their posts
 * @returns A table where a user can view all their posts and edit or delete a specific post
 */

const ManagePosts = () => {
  // setting base variables
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const loggedInUser = useSelector((state: RootState) => state.auth);
  const posts = useSelector(selectAllPosts);

  // useState
  const [editMode, setEditMode] = useState(false);
  const [formValue, setFormValue] = useState<formValue>({});
  const [change, setChange] = useState(false);

  // useEffect hook
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  // helper functions
  const handleDelete = (id: string) => {
    dispatch(deletePost(id));
    setChange(!change);
  };

  const onClickHandler = (queryObj: formValue) => {
    if (queryObj.method === "Edit") {
      setFormValue(queryObj);
      setEditMode(true);
    } else {
      queryObj = formValue;
      delete queryObj.method;
      dispatch(updatePost(queryObj));
      setEditMode(false);
    }
  };

  const changeHandler = (event: any) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  // typescript interface
  interface formValue {
    method?: string;
    _id?: string;
    title?: string;
    description?: string;
    tags?: [string];
  }

  return (
    <Wrapper>
      <LogoWrapper>
        <Logo src="logo.png" />
      </LogoWrapper>
      <Title>Your Posts</Title>
      <section>
        {posts.filter((individual) => individual.user._id === loggedInUser._id)
          .length === 0 ? (
          <MessageWrapper>
            <NoPosts>
              No posts yet.
            </NoPosts>
            <NoPosts>
              Go out and make some new memories! :)
            </NoPosts>
          </MessageWrapper>
        ) : (
          <Table>
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Description</Th>
                {/* <Th>Tags</Th> */}
                <Th>Date</Th>
                <Th>See a Typo?</Th>
                <Th>Lets Erase</Th>
              </Tr>
            </Thead>
            <Tbody>
              {posts.length < 0
                ? ""
                : posts
                    .filter(
                      (individual) => individual.user._id === loggedInUser._id
                    )
                    .map((post: IPost) => (
                      <Tr key={post._id}>
                        <Td>
                          {editMode && formValue._id === post._id ? (
                            <Input
                              onChange={changeHandler}
                              name="title"
                              value={formValue.title}
                            />
                          ) : (
                            post.title
                          )}
                        </Td>
                        <Td>
                          {editMode && formValue._id === post._id ? (
                            <Input
                              onChange={changeHandler}
                              name="description"
                              value={formValue.description}
                            />
                          ) : (
                            post.description
                          )}
                        </Td>
                        {/* <Td>
                          {editMode && formValue._id === post._id ? (
                            <input
                              onChange={changeHandler}
                              name="tags"
                              value={formValue.tags}
                            />
                          ) : (
                            post.tags
                          )}
                        </Td> */}

                        <Td>{post.timeStamp?.slice(0, -32)}</Td>
                        <Td>
                          <Button
                            onClick={(event) => {
                              onClickHandler({
                                method: (event.target as HTMLInputElement)
                                  .value,
                                _id: post._id,
                                title: post.title,
                                description: post.description,
                                // tags: post.tags,
                              });
                            }}
                            value={!editMode ? "Edit" : "Save Changes"}
                          >
                            {!editMode ? "Edit" : "Save Changes"}
                          </Button>
                        </Td>
                        <Td>
                          <Button
                            className="btn delete-btn"
                            onClick={() => {
                              handleDelete(post._id);
                            }}
                          >
                            Delete
                          </Button>
                        </Td>
                      </Tr>
                    ))}
            </Tbody>
          </Table>
        )}
      </section>
      <BackButtonContainer>
        <BackButton
          onClick={() => {
            navigate("/account");
          }}
        >
          Back to Account Dashboard
        </BackButton>
      </BackButtonContainer>
    </Wrapper>
  );
};

export default ManagePosts;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: #ceebec;
  height: 100vh;
  width: 100vw;

  // align-items: center;
  // justify-content: center;
  

  @media only screen and ${device.mobileLMax} {
    height: fit-content;
    width: 100vw;
    padding: 1rem;
  }
`;
const LogoWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin: 0px;
`;

const Logo = styled.img`
  width: 10rem;
  height: 10rem;

  @media ${device.tablet} {
    width: 12rem;
    height: 12rem;
  }
  @media ${device.laptop} {
    width: 14rem;
    height: 14rem;
  }
  @media ${device.desktop} {
    width: 16rem;
    height: 16rem;
  }
`;

const Title = styled.p`
  font-family: "Playfair Display", serif;
  font-size: 4rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #486572;

  @media only screen and ${device.mobileLMax} {
    font-size: 3rem;
  }
`;

const MessageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: solid #486572;
  border-width: 2px;
  border-radius: 5px;
  margin-bottom: 2rem;
  margin-top: 2rem;

  @media only screen and ${device.mobileLMax} {
  margin-bottom: 8.5rem;
  }
`;

const NoPosts = styled.p`
  color: #486572;
  text-align: center;
  padding: 1rem;
  font-size: 1.5rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  @media only screen and ${device.mobileLMax} {
    display: block;
  }
`;

const Tr = styled.tr`
  background: white;
  color: #486572;

  @media only screen and ${device.mobileLMax} {
    display: block;
    // position: absolute;
    // top: -9999px;
    // left: -9999px;

    border: 1px solid #ccc;
  }
`;

const Th = styled.th`
  background: #739cf0;
  color: whitesmoke;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;

  padding: 6px;
  border: 1px solid #ccc;
  text-align: center;

  @media only screen and ${device.mobileLMax} {
    display: block;
    position: absolute;
    top: -9999px;
    left: -9999px;
    background: #739cf0;
    color: whitesmoke;
  }
`;

const Td = styled.td`
  padding: 6px;
  border: 1px solid #ccc;
  text-align: left;
  font-family: "Cormorant Garamond", serif;
  word-break: keep-all;
  font-size: 1.2rem;

  @media only screen and ${device.mobileLMax} {
    display: block;
    overflow-wrap: break-word;

    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 50%;

    :before {
      position: absolute;
      top: 1px;
      left: 1px;
      bottom: 1px;
      width: 45%;
      padding: 5px;
      white-space: nowrap;
      background: #efefea;
      color: #486572;;
      font-weight: 600;
      font-family: "Cormorant Garamond", serif;
    }

    :nth-of-type(1):before {
      content: "Title";
    }
    :nth-of-type(2):before {
      content: "Description";
    }
    :nth-of-type(3):before {
      content: "Date";
    }
    :nth-of-type(4):before {
      content: "See a Typo?";
    }
    :nth-of-type(5):before {
      content: "Lets Erase";
    }
  }
`;

const Thead = styled.thead`
  @media only screen and ${device.mobileLMax} {
    display: block;
  }
`;

const Tbody = styled.tbody`
  @media only screen and ${device.mobileLMax} {
    display: block;
  }
`;

const Button = styled.button`
  background-color: #739cf0;
  font-family: "Montserrat", sans-serif;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: whitesmoke;
  font-size: 1rem;
  padding: 0.3rem;
  margin-left: 2px;
  margin-right: 2px;
  width: 5rem;
  word-break: keep-all;
  justify-content: center;
  display: flex;

  @media only screen and ${device.mobileLMax} {
    font-size: 0.8rem;
  }
`;

const Input = styled.textarea`
  height: 3rem;
  width: 100%;
  font-size: 1rem;
`;

const BackButtonContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const BackButton = styled(Button)`
  width: fit-content;
  padding: 0.75rem;
  font-size: 1rem;

  @media ${device.laptop} {
    font-size: 1.2rem;
  }
`;
