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
  color: #2e5077;
  cursor: pointer;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  display: flex;
  text-align: left;
  width: 95%;
  padding: 1rem;
  margin-bottom: 0.5rem;
`;

const ButtonCreate = styled.input`
  float: left;
  background: #2e5077;
  color: white;
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
  float: left;
  background: white;
  color: #2e5077;
  border: black solid 1px;
  transform: translateY(2px);
  margin: 0.5rem 0 0;
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
