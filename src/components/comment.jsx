import React, { useContext } from 'react'
import UserInfoContext from '../context/UserInfoContext'

const Comment = () => {

    const { username, isAdmin } = useContext(UserInfoContext);
    return (
        <div>
            <h1>Logged in as {username}</h1>
        </div>
    )
}

export default Comment
