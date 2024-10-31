import React, { useEffect, useState } from "react";
import { createPost, updatePost } from "../services/postService";

const PostForm = ({ posts, setPosts, editingPost, setEditingPost }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {

    if (editingPost) {
      setTitle(editingPost.title);
      setBody(editingPost.body);
    } else {
      setTitle('');
      setBody('');

    }

  }, [editingPost]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (editingPost) {
      editPost();
    } else {
      addPost();
    }
    setTitle('');
    setBody('');
  };

  const addPost = () => {
    createPost({ title, body })
      .then(response => {
        setPosts([...posts, response.data])
      })
      .catch(err => {
        console.error(err);
      })
  }

  const editPost = () => {
    updatePost(editingPost.id, { title, body })
      .then(response => {
        setPosts(posts.map(post => (post.id === editingPost.id ? response.data : post)))
      })
      .catch(err => {
        console.error(err);
      })
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        Title
      </div>
      <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
      <div>
        Body
      </div>
      <input type="text" name="body" value={body} onChange={e => setBody(e.target.value)} />
      <button type="submit">{editingPost ? "Edit Post" : "Add Post"}</button>
    </form>
  );
};

export default PostForm;
