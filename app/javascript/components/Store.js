import React from "react";

const Store = (props) => {
  
  return (
    <div>
      <p>{props.store.name}</p>
      <a href = {`/stores/${props.store.id}`} data-method = "delete">Delete Store</a>
      <a href="/">Home</a>
    </div>
  );
};

export default Store;