// import React from "react";

// function Login() {
//   return (
//     <div>
//       <h1>Login:</h1>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const user = {
//       user: {
//           email, password
//       }
//   }
  const handleSubmit = event => {
    event.preventDefault();
    // send the inputs to the login thing
    console.log(email, password);
    setEmail("");
    setPassword("");

//    props.handleSubmit(email, password)
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
      <input
        className="mr-sm-2"
        type="password"
        placeholder="Password"
        onChange={event => setPassword(event.target.value)}
        value={password}
      />
      <input type="submit" />
    </form> 
  );
};
export default LoginForm;