import React from "react";

const Item = (props) => {
  
  const renderItem = () => {
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
              Delete Item</a>
          <a href={`/items/${props.item.id}/comments/new`}>
              Add Comment</a>
        </div>

        
      </div>
    );
  }; 

  const renderItemComments = () => {
    return props.comments.map((comment) => {
      return (
        <div>
          <h3>{comment.body}</h3>
          <p>{comment.author}</p>
          {/* <p>Comment ID: {comment.id}</p> */}
          
          <a href={`/items/${props.item.id}/comments/${comment.id}`}>View Comment</a>
          <a href={`/items/${props.item.id}/comments/${comment.id}/edit`}>Edit Comment</a>
          <a data-method="delete" href={`/items/${props.item.id}/comments/${comment.id}`}>
            Delete Comment
          </a>
        </div>
      );
    });
  };

  console.log(props)
  return (
    <div>
    {renderItem()}
    <h1>What People Say About {props.item.name}:</h1>
    {renderItemComments()}
    <h6><code>{JSON.stringify(props)}</code></h6>
    </div>
  )
};

export default Item;

