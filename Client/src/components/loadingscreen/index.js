import React, { useEffect, useState } from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
const Loading = () => <div id="loading"></div>;

const Message = () => {
  return (
    <div className="message">
      <h3>Oops something must have occured while trying to connect.</h3>

      <p>
        <NavLink to="/wallet">Connect Manually</NavLink>
      </p>
    </div>
  );
};

const Index = () => {
  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    const time = setTimeout(() => {
      setShowMessage(true);
    }, 1000 * 5);

    return () => clearTimeout(time);
  });

  return (
    <section className="loading-screen">
      <div className="loader-container">
        {showMessage ? <Message /> : <Loading />}
      </div>
    </section>
  );
};

export default Index;
