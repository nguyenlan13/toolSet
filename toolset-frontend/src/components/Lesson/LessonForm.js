import React, { useState } from "react";

const LessonForm = (props) => {
  const [description, setDescription] = useState("");
  const handleSubmit = event => {
    event.preventDefault();

    setDescription("");

    props.handleSubmit(description)
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="mr-sm-2"
        type="text"
        placeholder="Lesson description"
        onChange={event => setDescription(event.target.value)}
        value={description}
      />
      <input type="submit" value="Add Lesson"/>
    </form> 
  );
};
export default LessonForm;