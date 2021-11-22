import React from "react";

const Items = (props) => {
  const renderItems = () => {
    return props.items.map((item) => {
      return (
        <div className='items'>
          <h2>{item.name}</h2>
          <h3>${item.price}</h3>
          <h3>{item.description}</h3>
          <p>Item ID: {item.id}</p>
          
          <a href={`/stores/${props.store.id}/items/${item.id}`}>Item Details</a>
          <a href={`/stores/${props.store.id}/items/${item.id}/edit`}>Edit Item</a>
          <a data-method="delete" href={`/stores/${props.store.id}/items/${item.id}`}>
            Delete Item
          </a>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Store: {props.store.name}</h1>
      <p>Store ID: {props.store.id}</p>
      <a href={`/stores`}>Back to Stores</a>
      <a href={`/stores/${props.store.id}/items/new`}>New Item</a>
      <hr />
      <h2>Items: </h2>
      {renderItems()}
      <p>{JSON.stringify(props)}</p>
    </div>
  );
};

export default Items;
