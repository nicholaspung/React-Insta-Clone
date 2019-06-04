import React from 'react';

const AddComment = props => {
    return (
        <form onSubmit={props.addNewComment}>
            <input placeholder="Add a comment..." onChange={props.handleInputChange} value={props.value} />
            <button>Post</button>
        </form>
    );
}

export default AddComment;