import React, { Component } from "react";

class Comment extends Component {


    render(){
        const {content, userName, timeStamp} = this.props
        return(
            <div>
                <p>
                    {timeStamp}
                    <br />
                    {content} - {userName}
                    <br />
                </p>
            </div>
        )
    }  
}

export default Comment
