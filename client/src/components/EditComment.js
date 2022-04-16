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
  color: #2e5077;
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

const CancelComment = styled.button`
  /* float: left; */
  background: white;
  border: solid lightgray 1px;
  color: #2e5077;
  font-family: -system-ui, sans-serif;
  font-size: 0.75rem;
  cursor: pointer;
  transform: translateY(2px);
  margin-top: 0.5rem;
  padding: 0.25rem 0.5rem;
`;

function EditComment({ user, comment }) {
  const [content, setContent] = useState("");

  let params = useParams();
  let navigate = useNavigate();

  console.log(params);

  async function handleEditComment(e) {
    e.preventDefault();
    const response = await fetch(`/comments/${params.commentID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content,
        comment_id: parseInt(params.commentID),
      }),
    });
    const comment = await response.json();
    if (response.ok) {
      console.log("Comment updated:", comment);
      setContent(comment);
      //   navigate(`/comments/${params.commentID}`);
      navigate(`/comments/${params.commentID}`);
    } else {
      console.log("Comment failed");
    }
  }

  function navBackToPost(e) {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <>
      <Div>
        <form onSubmit={handleEditComment}>
          <label>
            {/* Comment: */}
            <Input
              onChange={(e) => setContent(e.target.value)}
              type="text"
              defaultValue={params.comment}
              placeholder="leave comment..."
            />
          </label>
          <ButtonCreate type="submit" value="Edit Comment" />
        </form>
        <CancelComment onClick={navBackToPost}>Cancel</CancelComment>
      </Div>
    </>
  );
}

export default EditComment;
