import React from "react";

const NewItem = (props) => {
  return (
    <div>
      <h1>Add A New Item to {props.store.name}'s Inventory</h1>
      <form action={`/stores/${props.store.id}/items`} method="post">
        <p>Name</p>
        <input name="item[name]" />
        <p>Price</p>
        <textarea name="item[price]" />
        <p>Description</p>
        <textarea name="item[description]" />
        <br/>
        {/* why do I have to format line break with slash after the br? */}
        <button type="submit">Add Item</button>
      </form>

      {JSON.stringify(props)}
    </div>
  );
};

export default NewItem;