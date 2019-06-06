import React from 'react';
import styled from 'styled-components';

import comment from '../../assets/comment.png';
import heart from '../../assets/heart.png';
import unheart from '../../assets/unheart.png';

const ButtonFocus = styled.button`
    &:focus {
        outline: none;
    }
`;

const Like = props => {
    let likeImage = props.liked ? <img src={heart} alt="post like" /> : <img src={unheart} alt="post unlike" />

    return (
        <div>
            <ButtonFocus onClick={props.handleClick}>
                {likeImage}
            </ButtonFocus>
            <ButtonFocus>
                <img src={comment} alt="post comment" />
            </ButtonFocus>
        </div>
    );
}

export default Like;