import React from "react";

const storeEdit = (props) => {
  return (
    <div>
      <a href="/">View All Stores</a>
      <form action={`/stores/${props.store.id}`} method="post">
        <p>Store Name:</p>
        <input defaultValue={props.store.name} name="store[name]" />
        <button type="submit">Edit Store</button>
      </form>
    </div>
  );
};
export default storeEdit;