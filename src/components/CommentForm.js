import React, {Component} from 'react';
import CommentList from './CommentList';

class CommentForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            author: '',
            text: ''
        };
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handletextChange = this.handletextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
        event.preventDefault();
        const author = this.state.author.trim();
        const text = this.state.text.trim();
        if (!text || !author) {
          return
        }
        this.props.onSubmit({author: author, text: text});
        this.setState({author: '', text: ''});
      }

    render() {
        return(
           <form className="comment-form" onSubmit={this.handleSubmit}>
               <input type="text"
                   placeholder="Who is present for?"
                       value={this.state.author}
                           onChange={this.handleAuthorChange}>
               </input>

               <input type="text"
               placeholder="Present idea"
                   value={this.state.text}
                   onChange={this.handletextChange}>
               </input>

               <input type="submit" value="Post">
               
               </input>
           </form>
        )
    }

    handleAuthorChange(event) {
        this.setState({author: event.target.value});
    }

    handletextChange(event) {
        this.setState({text: event.target.value})
    }
}

export default CommentForm;