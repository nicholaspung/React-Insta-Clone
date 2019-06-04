import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import Like from './Like';

import './PostContainer.css';

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: props.post,
            liked: false,
            numberOfLikes: props.post.likes
        }
    }

    handleClick = () => {
        this.setState(prevState => {
            return {
                liked: !prevState.liked,
            }
        })
        this.setState(prevState => {
            return {
                numberOfLikes: (prevState.liked) ? (prevState.numberOfLikes + 1) : (prevState.numberOfLikes - 1)
            }
        })
    }

    render() {
        return (
            <div className="instagram-post">
                <div className="post-header">
                    <img src={this.state.post.thumbnailUrl} alt={`${this.state.post.username} logo`} className="post-user" />
                    <span className="text-bold post-username">{this.state.post.username}</span>
                </div>
                <img src={this.state.post.imageUrl} alt={`${this.state.post.username} post`} className="post-image" />
                <div className="post-padding">
                    <Like liked={this.state.liked} handleClick={this.handleClick} />
                </div>
                <span className="text-bold post-padding">{this.state.numberOfLikes} likes</span>
                <CommentSection comments={this.state.post.comments} timestamp={this.state.post.timestamp} />
            </div>
        );
    }
}

PostContainer.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.object)
    })
}

export default PostContainer;