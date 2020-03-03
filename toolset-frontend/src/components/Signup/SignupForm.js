import React, { useState } from "react";

const SignupForm = (props) => {
    console.log(props)
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    // send the inputs to the signup thing
    console.log(email, username, name, password);
    setEmail("");
    setUsername("");
    setName("");
    setPassword("");

   props.handleSubmit(email, username, name, password)
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="mr-sm-2"
        type="text"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
      <input
        className="mr-sm-2"
        type="text"
        placeholder="Username"
        onChange={e => setUsername(e.target.value)}
        value={username}
      />
      <input
        className="mr-sm-2"
        type="text"
        placeholder="Name"
        onChange={e => setName(e.target.value)}
        value={name}
      />
      <input
        className="mr-sm-2"
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
        value={password}
      />
      <input type="submit" />
    </form> 
  );
};
export default SignupForm;