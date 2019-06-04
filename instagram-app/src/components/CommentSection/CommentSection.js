import React from 'react';
import PropTypes from 'prop-types';

const CommentSection = props => {
    return (
        <div>
            <span className="text-bold post-padding">{props.comment.username}</span> {props.comment.text}
        </div>
    );
}

CommentSection.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.number,
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default CommentSection;