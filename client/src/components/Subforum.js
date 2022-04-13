import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SubforumContainer = styled.div`
  background: white;
`;

const Post = styled.div`
  border: solid gray 1px;
  border-radius: 3px;
  margin: 1rem;
  padding: 1rem;
`;

const Linebreak = styled.hr`
  margin-top: 0.5em;
  margin-bottom: 1em;
`;

function Subforum({ coin, user }) {
  const [subforum, setSubforum] = useState([]);

  useEffect(() => {
    fetch(`/forum/${coin}`)
      .then((r) => r.json())
      .then((data) => {
        setSubforum(data);
      });
  }, [coin]);

  function parsedDate(date) {
    let pdate = new Date(date);
    let month = pdate.getMonth();
    let day = pdate.getDay();
    let year = pdate.getFullYear();
    let hours = pdate.getHours();
    let minutes = pdate.getMinutes();
    switch (month) {
      case 1:
        month = "Jan";
        break;
      case 2:
        month = "Feb";
        break;
      case 3:
        month = "Mar";
        break;
      case 4:
        month = "Apr";
        break;
      case 5:
        month = "May";
        break;
      case 6:
        month = "Jun";
        break;
      case 7:
        month = "Jul";
        break;
      case 8:
        month = "Aug";
        break;
      case 9:
        month = "Sept";
        break;
      case 10:
        month = "Oct";
        break;
      case 11:
        month = "Nov";
        break;
      case 12:
        month = "Dec";
        break;
    }
    return `${month} ${day}, ${year}, ${hours}:${minutes} ${
      hours < 12 ? "AM" : "PM"
    }`;
  }

  const renderPosts = subforum?.posts?.map((post) => {
    return (
      <Post key={post.id}>
        <h3>{post.title}</h3>
        <br />
        <p>
          {post.body.slice(0, 150)}
          {post.body.slice(0, 150).length === 150 ? "..." : null}
        </p>
        <br />
        <Linebreak />
        <p>{post.comments.length} comments</p>
        <p>
          Latest post by: {post.user.username} |{" "}
          {parsedDate(post.user.updated_at)}
        </p>
      </Post>
    );
  });

  return (
    <SubforumContainer>
      <h1>{coin} Forum</h1>
      {renderPosts}
    </SubforumContainer>
  );
}

export default Subforum;
