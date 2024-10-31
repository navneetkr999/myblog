import React, { useContext, useEffect, useState } from 'react'
import Comment from './comment'
import UserInfoContext from '../context/UserInfoContext';
import { deletePost, getPosts } from '../services/postService';
import PostForm from './postForm';

const Post = () => {
    const { username, isAdmin } = useContext(UserInfoContext);

    const [posts, setPosts] = useState([]);
    const [editingPost, setEditingPost] = useState(null);

    useEffect(() => {
        console.log('Load Posts');
        getPosts()
            .then(result => {
                setPosts(result.data)
            })
            .catch(err => {
                console.error(err);
            })
    }, []);

    const handleDelete = (id) => {
        deletePost(id)
            .then(result => {
                setPosts(posts.filter(post => post.id !== id))
            })
            .catch(err => {
                console.error(err);
            })
    }

    const handleEdit = (post) => {
        setEditingPost(post)
    }

    return (
        <div>
            <h1>Posts</h1>
            <PostForm posts={posts} setPosts={setPosts} editingPost={editingPost} setEditingPost={setEditingPost} />
            <ul>
                {
                    posts.map((post) => (
                        <li key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <button onClick={() => handleEdit(post)}>Edit</button>
                            <button onClick={() => handleDelete(post.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
            <Comment />
        </div >
    )
}

export default Post
