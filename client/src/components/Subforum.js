import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CreatePost from "./CreatePost";

const SubforumContainer = styled.div`
  background: white;
`;

const Post = styled.div`
  border: solid gray 1px;
  border-radius: 3px;
  margin: 1rem;
  padding: 1rem;
`;

const Image = styled.img`
  position: inherit;
  float: left;
  border: solid lightgray 1px;
  border-radius: 5px;
  margin: 0.2em;
  margin-bottom: 1em;
`;

const Linebreak = styled.hr`
  margin-top: 0.5em;
  margin-bottom: 1em;
`;

const StartForum = styled.div`
  border: solid black 1px;
  margin: 1rem;
  padding: 2rem;
  text-align: center;
`;

const CreatePostLink = styled.span`
  text-decoration: underline;
  color: blue;
  cursor: pointer;
  font-weight: bolder;
`;

function Subforum({ coin, user }) {
  const [subforum, setSubforum] = useState([]);

  let params = useParams();

  useEffect(() => {
    fetch(`/forum/${params.coin}`)
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
        {post.user.avatar_url ? (
          <Image src={post.user.avatar_url} alt={post.user.username} />
        ) : null}
        <p>{post.comments.length} comments</p>
        <p>
          Latest post by: {post.user.username} |{" "}
          {parsedDate(post.user.updated_at)}
        </p>
      </Post>
    );
  });

  async function createForumAndPost() {
    const response = await fetch("/forums", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: params.coin,
      }),
    });
    const forum = await response.json();
    if (response.ok) {
      console.log(forum);
      setSubforum(forum);
    }
  }

  async function createFirstPost(e) {
    e.preventDefault();
    const response = await fetch(`/forum/${params.coin}`);
    const forum = await response.json();
    if (!response.ok) {
      console.log("forum desn't exist");
      createForumAndPost();
    }
  }

  return (
    <SubforumContainer>
      <h1>{params.coin} Forum</h1>
      {renderPosts}
      {!renderPosts ? (
        <StartForum>
          This forum has no posts yet!{" "}
          <CreatePostLink onClick={createFirstPost}>
            Create the first post!
          </CreatePostLink>
        </StartForum>
      ) : (
        <CreatePost subforum={subforum} user={user} />
      )}
    </SubforumContainer>
  );
}

export default Subforum;
