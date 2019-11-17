import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {
    render() {
        const commentNodes = this.props.data.map(comment => {
            return(
            <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
            );
        });

        return(
    <div className="comment-list">
       Present list!
        {commentNodes}
        {/* <Comment author="Ian Shepherd">Ian's comment here from comment list</Comment>
        <Comment author="Victoria Shepherd">Vic's comment here from comment list</Comment> */}
    </div>
        );
    }
}

export default CommentList;