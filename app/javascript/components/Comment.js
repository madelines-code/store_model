import React from "react";

const Comment = (props) => {
  return (
    <div>
      <h1>Comment View</h1>
      <a href={`/items/${props.comment.item_id}/comments`}>Back</a>
      <p>Comment ID: {props.comment.id}</p>
      <p>Item ID: {props.comment.item_id}</p>
      <p>Item Name: {props.item.name}</p>
      <div style={{ margin: "10px", border: "1px solid black" }}>
        <p>Author: {props.comment.author}</p>
        <p>Comment: {props.comment.body}</p>
        <a data-method="delete" href={`/items/${props.item.id}/comments/${props.comment.id}`}>
            Delete Comment</a>
        <a href={`/items/${props.item.id}/comments/${props.comment.id}/edit`}>
        Edit Comment</a>
      </div>

      <code>{JSON.stringify(props)}</code>
    </div>
  );
};

export default Comment;