import React from 'react';

import comment from './comment.png';
import heart from './heart.png';

const Like = () => {
    return (
        <div>
            <button>
                <img src={heart} alt="post like" />
            </button>
            <button>
                <img src={comment} alt="post comment" />
            </button>
        </div>
    );
}

export default Like;