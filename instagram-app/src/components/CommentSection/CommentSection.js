import React from 'react';
import PropTypes from 'prop-types';
import Comments from './Comments';
import AddComment from './AddComment';

class CommentSection extends React.Component {
    state = {
        timestamp: this.props.timestamp,
        comments: this.props.comments,
        value: ''
    }

    addNewComment = (event, index = this.state.comments.length) => {
        event.preventDefault();

        this.setState(prevState => {
            return {
                comments: [...prevState.comments, {
                    id: index + 1,
                    username: 'randomUser',
                    text: this.state.value
                }],
                value: ''
            }
        })
    }

    handleInputChange = event => {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <div>
                {this.state.comments.map(comment => <Comments comment={comment} key={comment.id} />)}
                {this.state.timestamp}
                <AddComment addNewComment={this.addNewComment} handleInputChange={this.handleInputChange} value={this.state.value} />
            </div>
        );
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            username: PropTypes.string,
            text: PropTypes.string
        })
    )
}

export default CommentSection;