import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const CommentContainer = styled.div`
  margin: 1rem;
  border: solid black 1px;
`;

const Headline = styled.h2`
  text-align: left;
`;

const UserDiv = styled.div`
  /* border: solid black 1px; */
  margin: 0.5rem;
  padding: 0.5rem;
`;

const Img = styled.img`
  display: flex;
  border-radius: 50px;
  border: solid lightgray 1px;
  width: 15px;
  float: left;
  overflow: hidden;
`;

const Linebreak = styled.hr`
  margin: 0.5rem 1rem;
`;

const Comment = styled.div`
  /* border: solid black 1px; */
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
        // console.log(post);
        setPost(post);
      });
  }, []);

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

  console.log(post);

  const renderComments = post?.comments?.map((comment) => {
    return (
      <CommentContainer key={comment.id}>
        <UserDiv>
          <Img src={comment.user.avatar_url} alt={comment.user.username} />
          <p>
            {comment.user.username} | Posted: {parsedDate(comment.created_at)}
          </p>
        </UserDiv>
        <Linebreak />
        <Comment>{comment.content}</Comment>
      </CommentContainer>
    );
  });

  return (
    <div>
      <Headline>{post?.title}</Headline>
      {renderComments}
    </div>
  );
}

export default Post;
