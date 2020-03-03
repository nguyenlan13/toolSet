import React, { useState } from "react";

const TopicForm = (props) => {
  const [name, setName] = useState("");
  const handleSubmit = event => {
    event.preventDefault();
    // send the inputs to the login thing
    setName("");

    props.handleSubmit(name)
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="mr-sm-2"
        type="text"
        placeholder="Topic name"
        onChange={event => setName(event.target.value)}
        value={name}
      />
      <input type="submit" value="Add Topic"/>
    </form> 
  );
};
export default TopicForm;