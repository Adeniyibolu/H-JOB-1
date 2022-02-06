import React, { useEffect, useState } from "react";
import "./index.css";
const Loading = () => <div id="loading"></div>;

const Message = ({ setShowLoad, setShowPopup }) => {
  return (
    <div className="message">
      <h3>Oops something must have occured while trying to connect.</h3>

      <p
        onClick={() => {
          return setShowLoad(false), setShowPopup(true);
        }}
      >
        Connect Manually
      </p>
    </div>
  );
};

const Index = ({ setShowPopup, setShowLoad }) => {
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
        {showMessage ? (
          <Message setShowPopup={setShowPopup} setShowLoad={setShowLoad} />
        ) : (
          <Loading />
        )}
      </div>
    </section>
  );
};

export default Index;
