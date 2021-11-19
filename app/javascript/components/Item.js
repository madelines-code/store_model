import React from "react";

const Item = (props) => {
  return (
    <div>
      <h1>Item View</h1>
      <a href={`/stores/${props.item.store_id}/items`}>Back</a>
      <p>Item ID: {props.item.id}</p>
      <p>Store ID: {props.item.store_id}</p>
      <p>Store Name: {props.store.name}</p>
      <div style={{ margin: "10px", border: "1px solid black" }}>
        <p>Name: {props.item.name}</p>
        <p>Price: ${props.item.price}</p>
        <p>Description: {props.item.description}</p>
        <a data-method="delete" href={`/stores/${props.store.id}/items/${props.item.id}`}>
            Delete Item
          </a>
      </div>

      <code>{JSON.stringify(props)}</code>
    </div>
  );
};

export default Item;

