import React, { useState } from "react";

const CommentForm = (props) => {
  const [content, setContent] = useState("");
  const handleSubmit = event => {
    event.preventDefault();
    // send the inputs to comment container
    setContent("");

    props.handleSubmit(content)
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="mr-sm-2"
        type="text"
        placeholder="comments..."
        onChange={event => setContent(event.target.value)}
        value={content}
      />
      <input type="submit" value="Submit Feedback"/>
    </form> 
  );
};
export default CommentForm;