import React, { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  border: solid black 1px;
  margin: 1rem;
  padding: 1rem;
`;

function CreatePost({ subForum, user }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return <Div>Create post</Div>;
}
export default CreatePost;
