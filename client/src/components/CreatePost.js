import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  border: solid #ededed 1px;
  margin: 1rem;
  margin-top: 3rem;
  padding: 1rem;
  overflow: hidden;
`;

const ForumTitle = styled.div`
  font-size: small;
  color: blue;
  cursor: pointer;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  display: flex;
  text-align: left;
  width: 95%;
  padding: 1rem;
`;

const ButtonCreate = styled.input`
  float: left;
  border: 0;
  border-radius: 0.25rem;
  background: orange;
  color: white;
  font-family: -system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.2;
  white-space: nowrap;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  width: auto;
  cursor: pointer;
  transform: translateY(2px);
`;

const CancelPost = styled.button`
  /* float: left; */
  background: white;
  border: solid lightgray 1px;
  color: black;
  font-family: -system-ui, sans-serif;
  font-size: 0.75rem;
  cursor: pointer;
  transform: translateY(2px);
  margin-top: 0.5rem;
  padding: 0.25rem 0.5rem;
`;

function CreatePost({ user }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [post, setPost] = useState({});

  let params = useParams();
  let navigate = useNavigate();

  async function handleCreatePost(e) {
    e.preventDefault();
    const response = await fetch("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
        user_id: user.id,
        forum_id: parseInt(params.id),
      }),
    });
    const post = await response.json();
    if (response.ok) {
      console.log("post created:", post);
      setPost(post);
      navigate(`/posts/${post.id}`);
    } else {
      console.log("post failed");
    }
  }

  function navBackToPost(e) {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <>
      <Div>
        <ForumTitle onClick={navBackToPost}>
          <span style={{ color: "black" }}>FORUM:</span>{" "}
          {params.title.toUpperCase()}
        </ForumTitle>
        <form onSubmit={handleCreatePost}>
          <label>
            Post Title:
            <Input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              defaultValue={title}
              placeholder="create post..."
            />
          </label>
          <br />
          <label>
            Post:
            <Input
              onChange={(e) => setBody(e.target.value)}
              type="text"
              defaultValue={body}
              placeholder="create post..."
            />
          </label>
          <ButtonCreate type="submit" value="Create Post" />
        </form>
        <CancelPost onClick={navBackToPost}>Cancel</CancelPost>
      </Div>
    </>
  );
}
export default CreatePost;
