import React from "react";
import "./possibility.css";
import possiblityImage from "../../assets/possibility.png";
const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possiblityImage} alt="Possibility Image" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request early access tto get started</h4>
        <h1 className="gradient__text">
          The possibilities are Beyond the imaginations
        </h1>
        <p>
          Yet bed any fot the Ttravelled things that should be orked with the
          GPT-3
        </p>
        <h4>Request early access tto get started</h4>
      </div>
    </div>
  );
};

export default Possibility;
