import React, { Component } from "react";
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class AttemptItem extends Component {


    render(){
        const {content, diagram, lessonId} = this.props
        console.log(content)
            return(
                <div>
                    <p>
                        {/* <Link className="link-color" onClick={() => this.handleClick(csrf_token, description, lessonId)} to={`/lessons/${lessonId}/attempts`}> */}
                        {/* <Link className="link-color"> */}
                            {content}
                            {diagram}
                        {/* </Link> */}

                    </p>
                </div>
            )
        }
      
}
    

const mapStateToProps = (state) => {
    const { categories, topics, lessons, csrf_token, user} = state;
    return { categories, topics, lessons, csrf_token, user}
    // const { category, topic, lesson, csrf_token, user} = state;
    // return { categories: category, topics: topic, lessons: lesson, csrf_token, user}
}

export default connect(mapStateToProps)(AttemptItem)