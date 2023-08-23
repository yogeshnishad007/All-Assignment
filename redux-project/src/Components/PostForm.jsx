import { useState } from "react";
import { useDispatch } from "react-redux";
import { postData } from "../redux/action";
import "../App.css"

const PostForm = () => {
  const [post, setPost] = useState({
    userId: "",
    title: "",
    body: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:3001/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });

      dispatch(postData(post));

      setPost({
        userId: "",
        title: "",
        body: "",
      });
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="box">
      <h2>Create a New Post</h2>
      <input
        type="text"
        name="userId"
        placeholder="User ID"
        value={post.userId}
        onChange={handleChange}
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={post.title}
        onChange={handleChange}
      />
      <textarea
        name="body"
        placeholder="Body"
        value={post.body}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Create Post</button>
    </div>
  );
};

export default PostForm;
