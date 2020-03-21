import React, { useState } from "react";
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

const AttemptForm = (props) => {
    // const [attemptNumber, setAttemptNumber] = useState("");
    const [content, setContent] = useState("");
    const [diagram, setDiagram] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    // setAttemptNumber("");
    setContent("");
    setDiagram("");
  
    // props.handleSubmit(attemptNumber, content, diagram)
    props.handleSubmit(content, diagram)
  };
  return (
    <form onSubmit={handleSubmit}>
        {/* <input
            className="mr-sm-2"
            type="text"
            placeholder="Attempt #"
            onChange={event => setAttemptNumber(event.target.value)}
            value={attemptNumber}
        /> */}
        <textarea
            className="attempt-form"
            placeholder="Add Content"
            onChange={event => setContent(event.target.value)}
            value={content}
        />
        <br />
        <input
            className="mr-sm-2"
            type="file"
            placeholder="Upload Diagram"
            onChange={event => setDiagram(event.target.value)}
            value={diagram}
        />
        <br />
        <br />
        <input type="submit" value="Submit Attempt"/>
    </form>   
  );
};





export default AttemptForm;