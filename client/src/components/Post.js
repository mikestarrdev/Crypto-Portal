import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const CommentContainer = styled.div`
  margin: 1rem;
  border: solid #ededed 1px;
  border-radius: 5px;
`;

const OP = styled.div`
  background-color: darkgray;
  color: white;
  width: auo;
  padding: 0.5rem 1rem;
`;

const Button = styled.button`
  margin: 0rem 1rem;
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
  margin: 0.5rem 1rem 1rem 1rem;
`;

const UserDiv = styled.div`
  background: whitesmoke;
  /* margin: 0.5rem; */
  padding: 0.5rem 1rem;
  font-size: smaller;
`;

const Img = styled.img`
  display: flex;
  border-radius: 50px;
  border: solid lightgray 1px;
  width: 15px;
  float: left;
  overflow: hidden;
  margin-right: 0.5rem;
`;

const Linebreak = styled.hr`
  margin: 1rem 1rem 0.5rem 1rem;
`;

const Comment = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;
`;

function Post({ user }) {
  const [post, setPost] = useState([]);

  let params = useParams();
  console.log(params);

  useEffect(() => {
    fetch(`/posts/${params.id}`)
      .then((r) => r.json())
      .then((post) => {
        setPost(post);
      });
  }, []);

  let navigate = useNavigate();

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

  const renderComments = post?.comments?.map((comment) => {
    return (
      <CommentContainer key={comment.id}>
        <UserDiv>
          {/* <Img src={comment.user.avatar_url} alt={comment.user.username} /> */}
          <p>
            {comment.user.username} | Posted: {parsedDate(comment.created_at)}
          </p>
        </UserDiv>
        <Linebreak />
        <Comment>{comment.content}</Comment>
      </CommentContainer>
    );
  });

  function navBackToForum(e) {
    e.preventDefault();
    navigate(`/forum/${post.forum.title}`);
  }

  function handleCreateComment(e) {
    e.preventDefault();
    navigate(`/create-comment/${post.title}/${post.id}`);
  }

  return (
    <div>
      <CommentContainer>
        <ForumNav>
          Forum:{" "}
          <NavSpan onClick={navBackToForum}>
            {post.forum?.title.toUpperCase()}
          </NavSpan>
        </ForumNav>
        <Headline>Topic: {post?.title}</Headline>
      </CommentContainer>
      {post.comments?.length > 5 ? (
        <Button onClick={handleCreateComment}>Leave Comment</Button>
      ) : null}
      <CommentContainer>
        <OP>Original Post</OP>
        <UserDiv>
          {/* <Img src={post.user?.avatar_url} alt={post.user?.username} /> */}
          <p>
            {post.user?.username} | Posted: {parsedDate(post?.created_at)}
          </p>
        </UserDiv>
        <Linebreak />
        <Comment>{post.body}</Comment>
      </CommentContainer>
      {renderComments}
      <Button onClick={handleCreateComment}>Leave Comment</Button>
    </div>
  );
}

export default Post;
