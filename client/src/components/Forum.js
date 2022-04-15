import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ForumContainer = styled.div`
  background: white;
`;

const Table = styled.table`
  text-align: justify;
  width: 95%;
  margin: 1rem;
  border: solid lightgray 1px;
`;

function Forum({ user }) {
  const [subforums, setSubforums] = useState([]);

  useEffect(() => {
    fetch("/forums")
      .then((r) => r.json())
      .then((subforums) => {
        setSubforums(subforums);
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

  const renderSubforums = subforums.map((subforum) => {
    return (
      <tr key={subforum.title}>
        <td
          onClick={(e) => {
            e.preventDefault();
            navigate(`/forum/${subforum.title}`);
          }}
          style={{ color: "blue", cursor: "pointer" }}
        >
          {subforum.title}
        </td>
        <td>{subforum.posts.length}</td>
      </tr>
    );
  });

  return (
    <ForumContainer>
      <h1>Forums:</h1>
      <Table>
        <thead>
          <tr>
            <th>Forum Title</th>
            <th>Posts</th>
          </tr>
        </thead>
        <tbody>{renderSubforums}</tbody>
      </Table>
    </ForumContainer>
  );
}

export default Forum;
