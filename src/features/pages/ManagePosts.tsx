import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useState, useEffect } from "react";
import {
  fetchAllPosts,
  deletePost,
  selectAllPosts,
  updatePost,
} from "../../store/postsSlice";
import { IsPost } from "../../interface";
import styled from "styled-components";
import { device } from "../../styles/global";

const ManagePosts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const loggedInUser = useSelector((state: RootState) => state.auth);
  const posts = useSelector(selectAllPosts);

  const [editMode, setEditMode] = useState(false);
  const [formValue, setFormValue] = useState<formValue>({});
  const [change, setChange] = useState(false);

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

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
          "No posts yet. Go out and make some new memories! :)"
        ) : (
          <Table>
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Description</Th>
                {/* <Th>Tags</Th> */}
                <Th>Date</Th>
                <Th>Edit Post</Th>
                <Th>Delete Post</Th>
              </Tr>
            </Thead>
            <Tbody>
              {posts.length < 0
                ? ""
                : posts
                    .filter(
                      (individual) => individual.user._id === loggedInUser._id
                    )
                    .map((post: IsPost) => (
                      <Tr key={post._id}>
                        <Td>
                          {editMode && formValue._id === post._id ? (
                            <input
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
                            <input
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

                        <Td>{post.timeStamp.slice(0, -32)}</Td>
                        <Td>
                          <button
                            className="btn primary-btn"
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
                          </button>
                        </Td>
                        <Td>
                          <button
                            className="btn delete-btn"
                            onClick={() => {
                              handleDelete(post._id);
                            }}
                          >
                            Delete
                          </button>
                        </Td>
                      </Tr>
                    ))}
            </Tbody>
          </Table>
        )}
      </section>
    </Wrapper>
  );
};

export default ManagePosts;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`;
const LogoWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin: 0px;
`;

const Logo = styled.img`
  width: 10rem;

  @media ${device.laptop} {
    width: 18rem;
    height: 18rem;
  }
`;

const Title = styled.p`
  font-family: "Playfair Display", serif;
  font-size: 4rem;
  text-align: center;
  margin-bottom: 1rem;

  @media only screen and ${device.mobileLMax}{
    font-size: 3.5rem;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  @media only screen and ${device.mobileLMax}{
    display: block;
  }
`;

const Tr = styled.tr`
  :nth-of-type(odd) {
    background: #eee;
  }
  @media only screen and ${device.mobileLMax}{
    display: block;

    // position: absolute;
    // top: -9999px;
    // left: -9999px;

    border: 1px solid #ccc;
  }
`;

const Th = styled.th`
  background: #333;
  color: white;
  font-weight: bold;

  padding: 6px;
  border: 1px solid #ccc;
  text-align: left;

  @media only screen and ${device.mobileLMax}{
    display: block;

    position: absolute;
    top: -9999px;
    left: -9999px;
  }
`;

const Td = styled.td`
  padding: 6px;
  border: 1px solid #ccc;
  text-align: left;

  @media only screen and ${device.mobileLMax}{
    display: block;

    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 50%;

    :before {
      position: absolute;
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }

    :nth-of-type(1):before {
      content: "Title";
    }
    :nth-of-type(2):before {
      content: "Description";
    }
    // :nth-of-type(3):before {
    //   content: "Tags";
    // }
    :nth-of-type(3):before {
      content: "Date";
    }
    :nth-of-type(4):before {
      content: "Edit Post";
    }
    :nth-of-type(5):before {
      content: "Delete Post";
    }
  }
`;

const Thead = styled.thead`
  @media only screen and ${device.mobileLMax}{
    display: block;
  }
`;

const Tbody = styled.tbody`
  @media only screen and ${device.mobileLMax}{
    display: block;
  }
`;
