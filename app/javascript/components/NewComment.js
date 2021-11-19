import React from "react";

const AddComment = (props) => {
  return (
    <div>
      <h1>Add A New Comment to {props.item.name}</h1>
      <form action={`/items/${props.item.id}/comments`} method="post">
        <p>Comment</p>
        <textarea name="comment[body]" />
        <p>First and Last Name</p>
        <input name="comment[author]" />
        <br/>
        <button type="submit">Add Comment</button>
      </form>

      {JSON.stringify(props)}
    </div>
  );
};

export default AddComment;