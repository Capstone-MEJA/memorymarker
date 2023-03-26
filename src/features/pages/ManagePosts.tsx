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
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Tags</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {posts.length < 0
              ? ""
              : posts
                  .filter(
                    (individual) => individual.user._id === loggedInUser._id
                  )
                  .map((post: IsPost) => (
                    <tr key={post._id}>
                      <td>
                        {editMode && formValue._id === post._id ? (
                          <input
                            onChange={changeHandler}
                            name="title"
                            value={formValue.title}
                          />
                        ) : (
                          post.title
                        )}
                      </td>
                      <td>
                        {editMode && formValue._id === post._id ? (
                          <input
                            onChange={changeHandler}
                            name="description"
                            value={formValue.description}
                          />
                        ) : (
                          post.description
                        )}
                      </td>
                      <td>
                        {editMode && formValue._id === post._id ? (
                          <input
                            onChange={changeHandler}
                            name="tags"
                            value={formValue.tags}
                          />
                        ) : (
                          post.tags
                        )}
                      </td>

                      <td>{post.timeStamp.slice(0, -32)}</td>
                      <td>
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
                      </td>
                      <td>
                        <button
                          className="btn delete-btn"
                          onClick={() => {
                            handleDelete(post._id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default ManagePosts;
