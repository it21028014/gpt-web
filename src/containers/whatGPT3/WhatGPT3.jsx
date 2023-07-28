import React from "react";
import "./whatGPT3.css";
import Feature from "../../components/feature/Feature";

const Blog = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Hello this all you need to know aobou the GPT-3"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          Possibilities are beyond your imaginations
        </h1>
        <p>Explore Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="ChatBot"
          text="Hello this all you need to know aobou the GPT-3"
        />
        <Feature
          title="Knowledge"
          text="Hello this all you need to know aobou the GPT-3"
        />
        <Feature
          title="Education"
          text="Hello this all you need to know aobou the GPT-3"
        />
      </div>
    </div>
  );
};

export default Blog;
