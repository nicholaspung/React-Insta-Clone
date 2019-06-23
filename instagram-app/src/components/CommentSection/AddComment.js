import React from 'react';
import styled from 'styled-components';

import './AddComment.css';

const CommentButton = styled.button`
    border: none;
    color: #3897f0;
    font-weight: 600;
    opacity: ${props => props.value ? 1 : 0.3}

    &:hover {
        outline: none;
    }
`;

const AddComment = props => {
    return (
        <form className="comment-form" onSubmit={props.addNewComment}>
            <input className="comment-input" placeholder="Add a comment..." onChange={props.handleInputChange} value={props.value} />
            <CommentButton>Post</CommentButton>
        </form>
    );
}

export default AddComment;