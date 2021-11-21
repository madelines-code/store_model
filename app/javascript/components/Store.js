import React from "react";

const Store = (props) => {  
  const renderItems = () => {
    return props.items.map((item) => {
      return (
        <div className="item-container">
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
      <h1>{props.store.name}</h1>
      {/* find out how to add edit and view items buttons */}
      <a href = {`/stores/${props.store.id}`} data-method = "delete">Delete Store</a>
      <a href="/">Home</a>
      <hr />
      <h2>Items: </h2>
      {renderItems()}
    </div>
  );
};

export default Store;