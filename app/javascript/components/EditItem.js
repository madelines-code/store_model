import React from "react";

const EditItem = (props) => {
  return (
    <div>
      <h1>Edit Item Form for {props.store.name}</h1>
      <form
        action={`/stores/${props.store.id}/items/${props.item.id}`}
        method="post"
      >
        <input type="hidden" name="_method" value="patch" />
        <p>Name</p>
        <input defaultValue={props.item.name} name="item[name]" />
        <p>Price</p>
        <textarea defaultValue={props.item.price} name="item[price]" />
        <p>Description</p>
        <textarea defaultValue={props.item.description} name="item[description]" />
        <br/>
        <button type="submit">Edit Item</button>
      </form>

      {JSON.stringify(props)}
    </div>
  );
};

export default EditItem;