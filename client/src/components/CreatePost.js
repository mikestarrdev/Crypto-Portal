import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  border: solid black 1px;
  margin: 1rem;
  margin-top: 3rem;
  padding: 1rem;
  overflow: hidden;
`;

const Input = styled.input`
  display: flex;
  text-align: left;
  width: 95%;
  padding: 1rem;
`;

const Button = styled.input`
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

function CreatePost({ subforum, user }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  console.log(subforum);

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
        user_id: user?.id,
        forum_id: subforum?.id,
      }),
    });
    const post = await response.json();
    if (response.ok) {
      console.log("post created:", post);
    } else {
      console.log("post failed");
    }
  }

  return (
    <Div>
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
        <Button type="submit" value="Create Post" />
      </form>
    </Div>
  );
}
export default CreatePost;
