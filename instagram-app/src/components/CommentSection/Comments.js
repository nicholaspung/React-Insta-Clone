import React from 'react';

const Comments = props => {
    return (
        <div>
            <span className="text-bold post-padding">{props.comment.username}</span> {props.comment.text}
        </div>
    );
}

export default Comments;