import React, { useState } from "react";
// import DoodleItem from '../DoodleItem'

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

  const handleUpload = function(event) {
    let file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        setDiagram(e.target.result);
        // setPreview(e.target.result);
    }
    reader.readAsDataURL(file);
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
            onChange={event => handleUpload(event)}
        />
        {/* <DoodleItem/> */}
        <br />
        <br />
        <input type="submit" value="Submit Attempt"/>
    </form>   
  );
};





export default AttemptForm;