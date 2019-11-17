import React, { Component } from "react";
import CommentList from '../components/CommentList';
import CommentForm from "../components/CommentForm";

class CommentBox extends Component {
    constructor(props) {
        super(props);
            this.state = {
                data: [
                    // {
                    //     id: 1,
                    //     author: "Ian Shepherd",
                    //     text: "Ian's comments here from comment box!"
                    // },
                    // {
                    //     id: 2,
                    //     author: "Vic Shepherd",
                    //     text: "Vic's comments here form comment box!"
                    // }
                ]
            };

            this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }

handleCommentSubmit(submittedComment){
    submittedComment.id = Date.now();
    const updatedComments = [...this.state.data, submittedComment];
    this.setState({data: updatedComments});
}


    render() {
        return (
          <div className="comment-box">
            <h2>Present List</h2>
            <CommentForm onSubmit={this.handleCommentSubmit}/>
            <CommentList data={this.state.data} />
          </div>
        );
    }
}

export default CommentBox;