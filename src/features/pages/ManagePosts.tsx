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
    <section>
      {posts.filter((individual) => individual.user._id === loggedInUser._id)
        .length === 0 ? (
        "No posts yet. Go out and make some new memories! :)"
      ) : (
        <Table>
          <thead>
            <Tr>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Tags</Th>
              <Th>Date</Th>
            </Tr>
          </thead>
          <tbody>
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
                      <Td>
                        {editMode && formValue._id === post._id ? (
                          <input
                            onChange={changeHandler}
                            name="tags"
                            value={formValue.tags}
                          />
                        ) : (
                          post.tags
                        )}
                      </Td>

                      <Td>{post.timeStamp.slice(0, -32)}</Td>
                      <Td>
                        <button
                          className="btn primary-btn"
                          onClick={(event) => {
                            onClickHandler({
                              method: (event.target as HTMLInputElement).value,
                              _id: post._id,
                              title: post.title,
                              description: post.description,
                              tags: post.tags,
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
          </tbody>
        </Table>
      )}
    </section>
  );
};

export default ManagePosts;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Tr = styled.tr`
  $:nth-of-type(odd) {
    background: #eee;
  }
`;

const Th = styled.th`
  background: #333;
  color: white;
  font-weight: bold;

  padding: 6px;
  border: 1px solid #ccc;
  text-align: left;
`;

const Td = styled.td`
  padding: 6px;
  border: 1px solid #ccc;
  text-align: left;
`;
