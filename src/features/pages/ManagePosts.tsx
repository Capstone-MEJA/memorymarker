import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useState, useEffect } from "react";
import { IsPost } from "../../interface";
import {
  deletePost,
  updatePost,
} from "../../store/postsSlice";
import { fetchSingleUser, selectAllUsers } from "../../store/usersSlice";
import { selectAllPosts } from "../../store/postsSlice";

const ManagePosts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(selectAllUsers)
  const loggedInUser = useSelector((state: RootState) => state.auth);

  const [editMode, setEditMode] = useState(false);
  const [formValue, setFormValue] = useState({});

  useEffect(() => {
    console.log(loggedInUser._id)
    dispatch(fetchSingleUser(loggedInUser._id))
  }, []);
  console.log(loggedInUser)
  console.log(user)

  const handleDelete = (id: string) => {
    dispatch(deletePost(id));
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
    latitude?: number;
    longitude?: number;
  }

  //   const actualPosts = [...posts];

  return (
    <p>hello</p>
    // <section>
    //   <table className="inventory-table">
    //     <thead>
    //       <tr>
    //         <th>Id</th>
    //         <th>Title</th>
    //         <th>Description</th>
    //         <th>Tags</th>
    //         <th>Latitude</th>
    //         <th>Longitude</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {posts.length < 0
    //         ? ""
    //         : posts.map((post) => (
    //             <tr key={post._id}>
    //               <td>{post._id}</td>
    //               <td>
    //                 {editMode && formValue._id === post._id ? (
    //                   <input
    //                     onChange={changeHandler}
    //                     name="title"
    //                     value={formValue.title}
    //                   />
    //                 ) : (
    //                   post.title
    //                 )}
    //               </td>
    //               <td>
    //                 {editMode && formValue._id === post._id ? (
    //                   <input
    //                     onChange={changeHandler}
    //                     name="description"
    //                     value={formValue.description}
    //                   />
    //                 ) : (
    //                   post.description
    //                 )}
    //               </td>
    //               <td>
    //                 {editMode && formValue._id === post._id ? (
    //                   <input
    //                     onChange={changeHandler}
    //                     name="tags"
    //                     value={formValue.tags}
    //                   />
    //                 ) : (
    //                   post.tags
    //                 )}
    //               </td>
    //               <td>
    //                 {editMode && formValue._id === post._id ? (
    //                   <textarea
    //                     onChange={changeHandler}
    //                     name="latitude"
    //                     value={formValue.latitude}
    //                   />
    //                 ) : (
    //                   post.latitude
    //                 )}
    //               </td>
    //               <td>
    //                 {editMode && formValue._id === post._id ? (
    //                   <input
    //                     onChange={changeHandler}
    //                     name="longitude"
    //                     value={formValue.longitude}
    //                   />
    //                 ) : (
    //                   post.longitude
    //                 )}
    //               </td>
    //               <td>
    //                 <button
    //                   className="btn primary-btn"
    //                   onClick={(event) => {
    //                     onClickHandler({
    //                       method: event.target.value,
    //                       _id: post._id,
    //                       title: post.title,
    //                       description: post.description,
    //                       tags: post.tags,
    //                       latitude: post.latitude,
    //                       longitude: post.longitude,
    //                     });
    //                   }}
    //                   value={!editMode ? "Edit" : "Save Changes"}
    //                 >
    //                   {!editMode ? "Edit" : "Save Changes"}
    //                 </button>
    //               </td>
    //               <td>
    //                 <button
    //                   className="btn delete-btn"
    //                   onClick={() => {
    //                     handleDelete(post._id);
    //                   }}
    //                 >
    //                   Delete
    //                 </button>
    //               </td>
    //             </tr>
    //           ))}
    //     </tbody>
    //   </table>
    // </section>
  );
};

export default ManagePosts;
