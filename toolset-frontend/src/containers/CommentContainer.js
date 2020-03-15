import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { getAttempts } from '../actions/attempt'
import { addComment } from '../actions/comment'
import { getAttemptComments } from '../actions/comment'
import Comment from '../components/Comment/Comment'
import CommentForm from '../components/Comment/CommentForm'


class CommentContainer extends Component {

    componentDidMount() {
        const attemptId = this.props.match.params.attemptId
        this.props.get_attempt_comments(this.props.csrf_token, attemptId)
    }

    submitHandler = async (content) => {
        const attemptId = this.props.match.params.attemptId
        await this.props.add_comment(this.props.csrf_token, content, attemptId)
    }

    render() {
        const { attemptComments } = this.props
        return(
            <div>
                <h1>Attempt Comments:</h1>
                < CommentForm handleSubmit={this.submitHandler}/>
                    {attemptComments.map(comment => {
                        return <Comment
                            content={comment.content}
                            key={comment.id} 
                            commentId={comment.id}
                            commentableId={comment.commentable_id}
                            commentableType={comment.commentable_type}
                            userName={comment.user.username}
                            timeStamp={comment.created_at}
                        />
                    })}                   
            </div>
        )     
    }
}


const mapStateToProps = (state) => {
    const { comments, csrf_token, user} = state;
    return { 
        comments: comments.comments,
        attemptComments: comments.attemptComments,
        commentComments: comments.commentComments,
        csrf_token: csrf_token,
        user: user
    }
}

const mapDispatchToProps = dispatch => ({
    add_comment: (csrf_token, content, attemptId) => dispatch(addComment(csrf_token, content, attemptId)),
    get_attempt_comments: (csrf_token, attemptId) => dispatch(getAttemptComments(csrf_token, attemptId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer)
