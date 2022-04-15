import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const SubforumContainer = styled.div`
  background: white;
`;

const CommentContainer = styled.div`
  margin: 1rem;
  border: solid #ededed 1px;
  border-radius: 5px;
`;

const NavSpan = styled.span`
  font-size: small;
  color: blue;
  cursor: pointer;
`;

const ForumNav = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;
`;

const Headline = styled.h3`
  text-align: left;
  margin: 1rem;
`;

const Table = styled.table`
  text-align: left;
  width: 95%;
  margin: 1rem;
  border: solid 1px lightgray;
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
  }, [params.coin]);

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
    return `${month}-${day}-${year}, ${hours}:${minutes} ${
      hours < 12 ? "AM" : "PM"
    }`;
  }

  const renderPostsTable = subforum?.posts?.map((post) => {
    return (
      <tr key={post.id}>
        <td
          onClick={(e) => {
            e.preventDefault();
            navigate(`/posts/${post.id}`);
          }}
          style={{ color: "blue", cursor: "pointer" }}
        >
          {post.title}
        </td>
        <td>{post.comments.length}</td>
        <td>{post.user.username}</td>
        <td>{parsedDate(post.user.updated_at)}</td>
      </tr>
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
    // const forum = await response.json();
    if (!response.ok) {
      console.log("forum desn't exist");
      createForumAndPost();
    }
  }

  let navigate = useNavigate();

  function navBackToForum(e) {
    e.preventDefault();
    navigate("/forum");
  }

  function navToCreatePost(e) {
    e.preventDefault();
    navigate(`/create-post/${subforum.title}/${subforum.id}`);
  }

  return (
    <SubforumContainer>
      <CommentContainer>
        <ForumNav>
          <NavSpan onClick={navBackToForum}>ALL FORUMS</NavSpan>
        </ForumNav>
        <Headline>{params.coin} Forum</Headline>
      </CommentContainer>
      {renderPostsTable?.length > 0 ? (
        <>
          <button onClick={navToCreatePost}>Create Post</button>
          <Table>
            <thead>
              <tr>
                <th>Topic</th>
                <th>Comments</th>
                <th>Posted by</th>
                <th>Latest Post Date</th>
              </tr>
            </thead>
            <tbody>{renderPostsTable}</tbody>
          </Table>
        </>
      ) : null}
      {!renderPostsTable ? (
        <StartForum>
          This forum has no posts yet!{" "}
          <CreatePostLink onClick={createFirstPost}>
            Create the first post!
          </CreatePostLink>
        </StartForum>
      ) : (
        // null
        <button onClick={navToCreatePost}>Create Post</button>
      )}
    </SubforumContainer>
  );
}

export default Subforum;
