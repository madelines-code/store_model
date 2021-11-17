import React from "react";

const Store = (props) => {
  
  return (
    <div>
      <p>{props.store.name}</p>
      <a href="/">Home</a>
    </div>
  );
};

export default Store;