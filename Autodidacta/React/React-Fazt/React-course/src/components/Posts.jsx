import React from "react";
import { VscGlobe } from "react-icons/vsc";

const Posts = () => {
  return (
    <button
      onClick={() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((err) => console.error(err));
      }}
    >
      <VscGlobe/>
      Get Data
    </button>
  );
};

export default Posts;
