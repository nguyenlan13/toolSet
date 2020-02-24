import React, { useState } from "react";

function SearchBar(props) {
  const [input, setInput] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    // console.log(input);
    props.handleSearch(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="search"
        value={input}
        onChange={event => setInput(event.target.value)}
        placeholder="Search"
      />
    </form>
  );
}

export default SearchBar;