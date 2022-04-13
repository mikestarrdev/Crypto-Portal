import React, { useState, useEffect, useParams } from "react";
import styled from "styled-components";

function Post({ user }) {
  const [comments, setComments] = useState([]);
  let params = useParams();

  useEffect(() => {
    fetch(`/comments/${params.id}`)
      .then((r) => r.json())
      .then((comments) => {
        console.log(comments);
        setComments(comments);
      });
  }, []);

  return <div></div>;
}

export default Post;
