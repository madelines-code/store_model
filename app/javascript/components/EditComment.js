import React from "react";

const EditComment = (props) => {
  return (
    <div>
      <h1>Edit Comment Form for {props.item.name}</h1>
      <form
        action={`/items/${props.item.id}/comments/${props.comment.id}`}
        method="post"
      >
        <input type="hidden" name="_method" value="patch" />
        <p>Author</p>
        <input defaultValue={props.comment.author} name="comment[author]" />
        <p>Comment</p>
        <textarea defaultValue={props.comment.body} name="comment[body]" />
        <br/>
        <button type="submit">Edit Comment</button>
      </form>

      {JSON.stringify(props)}
    </div>
  );
};

export default EditComment;