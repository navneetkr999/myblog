import React, { useContext } from 'react'
import Comment from './comment'
import UserInfoContext from '../context/UserInfoContext';

const Post = () => {
    const { username, isAdmin } = useContext(UserInfoContext);

    return (
        <div>
            {isAdmin && <button>Delete</button>}
            <h1>Example Post Title</h1>
            <p>Example post content</p>
            <Comment />
        </div>
    )
}

export default Post
