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
  background: orange;
  color: white;
  border: solid orange 1px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  min-width: 32px;
  padding: 4px 16px;
  align-items: center;
  border-radius: 9999px;
  box-sizing: border-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;
  text-align: center;
  width: auto;
  margin: 0.5rem 1rem;
  cursor: pointer;
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
