import React, { useState } from "react";

const AttemptForm = (props) => {
    const [attemptNumber, setAttemptNumber] = useState("");
    const [content, setContent] = useState("");
    const [diagram, setDiagram] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    setAttemptNumber("");
    setContent("");
    setDiagram("");
  

    props.handleSubmit(attemptNumber, content, diagram)
  };
  return (
    <form onSubmit={handleSubmit}>
        <input
            className="mr-sm-2"
            type="text"
            placeholder="Attempt #"
            onChange={event => setAttemptNumber(event.target.value)}
            value={attemptNumber}
        />
        <input
            className="mr-sm-2"
            type="text"
            placeholder="Content"
            onChange={event => setContent(event.target.value)}
            value={content}
        />
        <input
            className="mr-sm-2"
            type="text"
            placeholder="Upload Diagram"
            onChange={event => setDiagram(event.target.value)}
            value={diagram}
        />
        <input type="submit" value="Submit Attempt"/>
    </form>   
  );
};
export default AttemptForm;