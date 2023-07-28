import React from "react";
import "./features.css";
import Feature from "../../components/feature/Feature";

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The future is Now ans You just need to realize it.Step into Future
          today & make it happen.
        </h1>
        <p>Request early Access</p>
      </div>
      <div className="gpt3__features-container">
        <Feature
          title="IMporve the Distrusts in"
          text="From they fone oin he given "
        />

        <Feature
          title="Become Tended Active"
          text="From they fone oin he given "
        />

        <Feature
          title="Message ot am nothing"
          text="From they fone oin he given "
        />

        <Feature
          title="Really bot lwa County"
          text="From they fone oin he given "
        />
      </div>
    </div>
  );
};

export default Features;
