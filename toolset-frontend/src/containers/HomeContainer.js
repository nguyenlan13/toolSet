import React from "react";
import { Link } from 'react-router-dom'

function HomeContainer() {
  return (
    <div style={{paddingTop: "80px"}}>
      <h1 className="headlines">ADD A NEW TOOL TO YOUR TOOLSET!</h1>
      <div style={{paddingTop: "60px"}}>
        <p style={{fontSize: "x-large"}} className="link-color">Please <Link className="layout-link" to="/login"> LOG IN to begin.</Link> </p> 
        <p style={{fontSize: "large"}} className="link-color"> New to toolSet? <Link className="layout-link" to="/signup"> SIGN UP! </Link> </p>
      </div>
    </div>
  );
}

export default HomeContainer;