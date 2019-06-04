import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

import './PostContainer.css';

import comment from './comment.png';
import heart from './heart.png';

const PostContainer = props => {
    return (
        <div className="instagram-post">
            <div className="post-header">
                <img src={props.post.thumbnailUrl} alt={`${props.post.username} logo`} className="post-user" />
                <span className="text-bold post-username">{props.post.username}</span>
            </div>
            <img src={props.post.imageUrl} alt={`${props.post.username} post`} className="post-image" />
            <div className="post-padding">
                <button>
                    <img src={heart} alt="post like" />
                </button>
                <button>
                    <img src={comment} alt="post comment" />
                </button>
            </div>
            <span className="text-bold post-padding">{props.post.likes} likes</span>
            {props.post.comments.map(comment => <CommentSection comment={comment} key={comment.id} />)}
        </div>
    );
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