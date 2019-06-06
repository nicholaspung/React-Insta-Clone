import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import Like from './Like';
import styled from 'styled-components';

import './PostContainer.css';

const InstagramPostDiv = styled.div`
    width: 600px;
    margin: 0 auto 60px auto;
    border: 1px solid #e6e6e6;
    background: white;
`;

const PostHeaderDiv = styled.div`
    padding: 16px;
`;

const PostPaddingDiv = styled.div`
    padding: 0 16px;
`;

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
            <InstagramPostDiv>
                <PostHeaderDiv>
                    <img src={this.state.post.thumbnailUrl} alt={`${this.state.post.username} logo`} className="post-user" />
                    <span className="text-bold post-username">{this.state.post.username}</span>
                </PostHeaderDiv>
                <img src={this.state.post.imageUrl} alt={`${this.state.post.username} post`} className="post-image" />
                <PostPaddingDiv>
                    <Like liked={this.state.liked} handleClick={this.handleClick} />
                    <span className="text-bold post-padding">{this.state.numberOfLikes} likes</span>
                    <CommentSection comments={this.state.post.comments} timestamp={this.state.post.timestamp} />
                </PostPaddingDiv>
            </InstagramPostDiv>
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