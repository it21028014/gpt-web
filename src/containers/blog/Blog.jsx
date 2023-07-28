import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, we are blogginh about it
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgurl={blog01}
            date="July 28, 2023 "
            title="OpenAi is tthe future. Let us Explore how it is"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgurl={blog02}
            date="July 28, 2023 "
            title="OpenAi is tthe future. Let us Explore how it is"
          />
          <Article
            imgurl={blog03}
            date="July 28, 2023 "
            title="OpenAi is tthe future. Let us Explore how it is"
          />
          <Article
            imgurl={blog04}
            date="July 28, 2023 "
            title="OpenAi is tthe future. Let us Explore how it is"
          />
          <Article
            imgurl={blog05}
            date="July 28, 2023 "
            title="OpenAi is tthe future. Let us Explore how it is"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
