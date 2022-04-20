import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Comment from "./Comment";

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

const Delete = styled.span`
  font-size: small;
  color: gray;
  cursor: pointer;
`;

const Button = styled.button`
  margin: 0rem 1rem;

  a:link {
    text-decoration: none;
    color: white;
  }
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

const Content = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;
`;

function Post({ user }) {
  const [post, setPost] = useState([]);

  let params = useParams();

  useEffect(() => {
    fetch(`/posts/${params.id}`)
      .then((r) => r.json())
      .then((post) => {
        setPost(post);
      });
  }, [params.id]);

  let navigate = useNavigate();

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
    }
    return `${month}-${day}-${year}, ${
      hours > 12 ? hours - 12 : hours
    }:${minutes} ${hours < 12 ? "am" : "pm"}`;
  }

  const renderComments = post?.comments?.map((comment) => {
    return (
      <Comment
        key={comment.id}
        postID={post.id}
        user={user}
        postUserID={comment.user.id}
        commentID={comment.id}
        username={comment.user.username}
        dateUpdated={comment.created_at}
        comment={comment.content}
      />
    );
  });

  function navBackToForum(e) {
    e.preventDefault();
    navigate(`/forum/${post.forum.title}`);
  }

  // function handleCreateComment(e) {
  //   e.preventDefault();
  //   navigate(`/create-comment/${post.title}/${post.id}`);
  // }

  function handleDeletePost(e) {
    e.preventDefault();
    let confirmation = prompt(`Type "DELETE" to permanently remove your post`);

    if (
      confirmation.toLowerCase() === `"delete"` ||
      confirmation.toLowerCase() === `delete`
    ) {
      fetch(`/posts/${post.id}`, {
        method: "DELETE",
      });
      navigate(`/forum/${post.forum?.title}`);
    }
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
        <>
          <Button>
            <Link to={`/create-comment/${post.id}`}>Leave Comment</Link>
          </Button>
        </>
      ) : null}
      <CommentContainer>
        <OP>Original Post</OP>
        <UserDiv>
          <p>
            User: {post.user?.username} | Posted: {parsedDate(post?.created_at)}{" "}
            {post.comments?.length === 0 && post.user?.id === user?.id ? (
              <>
                <Delete onClick={handleDeletePost}>DELETE </Delete>
              </>
            ) : null}
          </p>
        </UserDiv>
        <Content>{post.body}</Content>
        {/* <UserDiv>
          <p>
            {post.user?.btc_address ? (
              <>
                <strong>BTC:</strong> {post.user.btc_address}
              </>
            ) : null}
            
            <br />
            {post.user?.eth_address ? (
              <>
                <strong>ETH:</strong> {post.user.eth_address}
              </>
            ) : null}
          </p>
        </UserDiv> */}
      </CommentContainer>
      {renderComments}

      <Button>
        <Link to={`/create-comment/${post.id}/${post.title}`}>
          Leave Comment
        </Link>
      </Button>
    </div>
  );
}

export default Post;
