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
  color: #2e5077;
  cursor: pointer;
`;

const ForumNav = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;
`;

const Headline = styled.h1`
  text-align: left;
  margin: 1rem;
  font-family: "Ubuntu Mono", monospace;
`;

const Table = styled.table`
  text-align: left;
  width: 95%;
  margin: 1rem;
  border: solid 1px whitesmoke;
`;

const StartForum = styled.div`
  border: solid whitesmoke 1px;
  margin: 1rem;
  padding: 2rem;
  text-align: center;
`;

const CreatePostLink = styled.span`
  text-decoration: underline;
  color: #2e5077;
  cursor: pointer;
  font-weight: bolder;
`;

function Subforum({ coin, user }) {
  const [subforum, setSubforum] = useState([]);

  let params = useParams();

  useEffect(() => {
    fetch(`https://cryptoportal.herokuapp.com/forum/${params.coin}`)
      .then((r) => r.json())
      .then((data) => {
        setSubforum(data);
      });
  }, [params.coin]);

  function parsedDate(date) {
    let pdate = new Date(date);
    let month = pdate.getMonth();
    let day = pdate.getDate();
    let year = pdate.getFullYear();
    let hours = pdate.getHours();
    let minutes = pdate.getMinutes();
    switch (month) {
      case 0:
        month = "Jan";
        break;
      case 1:
        month = "Feb";
        break;
      case 2:
        month = "Mar";
        break;
      case 3:
        month = "Apr";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "Jun";
        break;
      case 6:
        month = "Jul";
        break;
      case 7:
        month = "Aug";
        break;
      case 8:
        month = "Sept";
        break;
      case 9:
        month = "Oct";
        break;
      case 10:
        month = "Nov";
        break;
      case 11:
        month = "Dec";
        break;
      default:
        month = "";
    }
    return `${month}-${day}-${year}, ${
      hours > 12 ? hours - 12 : hours
    }:${minutes} ${hours < 12 ? "am" : "pm"}`;
  }

  const renderPostsTable = subforum?.posts?.map((post) => {
    return (
      <tr key={post.id}>
        <td
          onClick={(e) => {
            e.preventDefault();
            navigate(`/posts/${post.id}`);
          }}
          style={{ color: "#2E5077", cursor: "pointer" }}
        >
          {post.title}
        </td>
        <td>{post.comments.length}</td>
        <td>{post.user.username}</td>
        <td>
          {post.comments.length > 0
            ? parsedDate(post.comments[post.comments.length - 1]?.created_at)
            : parsedDate(post.created_at)}
        </td>
      </tr>
    );
  });

  async function createForumAndPost() {
    const response = await fetch("https://cryptoportal.herokuapp.com/forums", {
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
    const response = await fetch(
      `https://cryptoportal.herokuapp.com/forum/${params.coin}`
    );
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
