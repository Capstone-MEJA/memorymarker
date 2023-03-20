import { Link } from "react-router-dom";
// import authentication

const UserProfile = () => {
  return (
    <>
      <section>
        <Link to={`/information`}>Information</Link>
        <Link to={`/myposts`}>Posts</Link>

        <div>
          <h1>Hi, {"username here"}</h1>
          <h1>
            From your account dashboard, you can view and manage your posts, and
            edit your password and account details.
          </h1>
        </div>

      </section>
    </>
  );
};

export default UserProfile;
