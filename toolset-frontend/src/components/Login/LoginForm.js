import React, { useState } from "react";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = event => {
    event.preventDefault();
    // send the inputs to the login thing
    console.log(email, password);
    setEmail("");
    setPassword("");

    props.handleSubmit(email, password)
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="mr-sm-2"
        type="text"
        placeholder="Email"
        onChange={event => setEmail(event.target.value)}
        value={email}
      />
      <br/>
      <input
        className="mr-sm-2"
        type="password"
        placeholder="Password"
        onChange={event => setPassword(event.target.value)}
        value={password}
      />
      <br/>
      <input type="submit" />
    </form> 
  );
};
export default LoginForm;