import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const ForumContainer = styled.div`
  background: white;
`;

const SubforumDiv = styled.div`
  display: flex;
  text-align: left;
  border: solid gray 1px;
  margin: auto;
  margin-top: 1rem;
  width: 80%;
  padding: 1rem;
  border-radius: 3px;
`;

const DivBox = styled.div`
  /* display: flex; */
  /* border: solid gray 1px; */
  /* float: right; */
`;

const SubforumBtn = styled.button`
  background: white;
  color: black;
  padding: 0;
  margin: 0 0 1rem 0;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  &:active {
    transform: translateY(2px);
  }
`;

function Forum({ user }) {
  const [subforums, setSubforums] = useState([]);

  useEffect(() => {
    fetch("/forums")
      .then((r) => r.json())
      .then((subforums) => {
        console.log(subforums);
        setSubforums(subforums);
      });
  }, []);

  let navigate = useNavigate();

  const renderSubforums = subforums.map((subforum) => {
    return (
      <SubforumDiv key={subforum.title}>
        <DivBox>
          <SubforumBtn
            coin={subforum.title}
            onClick={(e) => {
              e.preventDefault();
              console.log(subforum.title);
              navigate(`/forum/${subforum.title}`);
            }}
          >
            {subforum.title}
          </SubforumBtn>
          <br />
          <p>Posts: {subforum.posts.length}</p>
          <p>
            Latest post:{" "}
            <strong>{subforum.posts[subforum.posts.length - 1]?.title}</strong>
          </p>
        </DivBox>
      </SubforumDiv>
    );
  });

  return (
    <ForumContainer>
      <h1>Forums:</h1>
      {renderSubforums}
    </ForumContainer>
  );
}

export default Forum;
