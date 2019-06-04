import React from 'react';

import comment from './comment.png';
import heart from './heart.png';
import unheart from './unheart.png';

const Like = props => {
    let likeImage = props.liked ? <img src={heart} alt="post like" /> : <img src={unheart} alt="post unlike" />

    return (
        <div>
            <button onClick={props.handleClick}>
                {likeImage}
            </button>
            <button>
                <img src={comment} alt="post comment" />
            </button>
        </div>
    );
}

export default Like;