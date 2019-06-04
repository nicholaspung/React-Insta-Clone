import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import Like from './Like';

import './PostContainer.css';

const PostContainer = props => {
    return (
        <div className="instagram-post">
            <div className="post-header">
                <img src={props.post.thumbnailUrl} alt={`${props.post.username} logo`} className="post-user" />
                <span className="text-bold post-username">{props.post.username}</span>
            </div>
            <img src={props.post.imageUrl} alt={`${props.post.username} post`} className="post-image" />
            <div className="post-padding">
                <Like />
            </div>
            <span className="text-bold post-padding">{props.post.likes} likes</span>
            <CommentSection comments={props.post.comments} />
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