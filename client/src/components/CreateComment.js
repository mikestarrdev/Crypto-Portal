import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

function CreateComment({ user }) {
  const [content, setContent] = useState("");

  let params = useParams();
  let navigate = useNavigate();

  async function handleCreateComment(e) {
    e.preventDefault();
    const response = await fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content,
        user_id: user.id,
        post_id: parseInt(params.id),
      }),
    });
    const comment = await response.json();
    if (response.ok) {
      console.log("Comment created:", comment);
      setContent(comment);
      navigate(`/posts/${params.id}`);
    } else {
      console.log("post failed");
    }
  }

  function navBackToPost(e) {
    e.preventDefault();
    navigate(-1);
  }

  //   console.log(params);

  return (
    <>
      <Div>
        <ForumTitle onClick={navBackToPost}>
          <span style={{ color: "black" }}>POST:</span>{" "}
          {params.title?.toUpperCase()}
        </ForumTitle>
        <form onSubmit={handleCreateComment}>
          <label>
            {/* Comment: */}
            <Input
              onChange={(e) => setContent(e.target.value)}
              type="text"
              defaultValue={content}
              placeholder="leave comment..."
            />
          </label>
          <ButtonCreate type="submit" value="Leave Comment" />
        </form>
        <CancelPost onClick={navBackToPost}>Cancel</CancelPost>
      </Div>
    </>
  );
}

export default CreateComment;
