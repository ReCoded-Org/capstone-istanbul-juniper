import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import ResourcesSection from "../../components/ResourcesSection";
import "./index.css";

const Home = () => {
  const { user, setUser } = useContext(AuthContext);
  return (
    <>
      Welcome, {user.isLoggedin ? user.fullname : "GUEST"}, |
      {user.isLoggedin ? (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setUser({});
          }}
        >
          Logout{" "}
        </a>
      ) : (
        <Link to="/login">Login</Link>
      )}
      <hr />
      <ResourcesSection />
    </>
  );
};

export default Home;
