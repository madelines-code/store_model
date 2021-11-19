import React from "react";

const Comments = (props) => {
  const renderComments = () => {
    return props.comments.map((comment) => {
      return (
        <div>
          <h2>{comment.author}</h2>
          <h3>{comment.body}</h3>
          <p>Comment ID: {comment.id}</p>
          
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
      <h1>Item: {props.item.name}</h1>
      <p>Item ID: {props.item.id}</p>

      {/* a link to go back to subs index */}
      <a href={`/stores/${props.item.store_id}/items`}>Back to Items</a>
      <a href={`/items/${props.item.id}/comments/new`}>New Comment</a>
      <hr />
      <h2>Comments: </h2>
      {renderComments()}
      <p>{JSON.stringify(props)}</p>
    </div>
  );
};

export default Comments;
