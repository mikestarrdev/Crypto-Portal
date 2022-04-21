import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import EditComment from "./EditComment";

const CommentContainer = styled.div`
  margin: 1.5rem 1rem;
  border: solid #ededed 1px;
  border-radius: 5px;
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

const Delete = styled.span`
  font-size: small;
  color: gray;
  cursor: pointer;
`;

function Comment({
  user,
  postID,
  postUserID,
  commentID,
  username,
  posted,
  comment,
  dateUpdated,
}) {
  let navigate = useNavigate();

  function handleDeleteComment(e) {
    e.preventDefault();
    let confirmation = prompt(
      `Type "DELETE" to permanently remove your comment`
    );

    if (
      confirmation.toLowerCase() === `"delete"` ||
      confirmation.toLowerCase() === `delete`
    ) {
      fetch(`/comments/${commentID}`, {
        method: "DELETE",
      });
      navigate(0);
    }
  }

  // console.log(comment, commentID);

  // function handleEditComment(e) {
  //   e.preventDefault();
  //   navigate(`/edit-comment/${comment}/${commentID}/${postID}`);
  // }

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
    return `${month}-${day}-${year}, ${hours}:${minutes} ${
      hours < 12 ? "AM" : "PM"
    }`;
  }

  return (
    <CommentContainer>
      <UserDiv {...user} {...postUserID} {...commentID} {...postID}>
        <p>
          User: {username} | Posted: {parsedDate(dateUpdated)} |{" "}
          {postUserID === user.id ? (
            <>
              {/* <Delete onClick={handleEditComment}>EDIT </Delete> |{" "} */}
              <Delete onClick={handleDeleteComment}>DELETE </Delete>
            </>
          ) : null}
        </p>
      </UserDiv>
      <Content>{comment}</Content>
    </CommentContainer>
  );
}

export default Comment;
