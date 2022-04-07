import React from "react";

function Logout({ setCurrentUser }) {
  function handleLogout(e) {
    e.preventDefault();
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        console.log("user logged out");
        setCurrentUser(null);
      }
    });
  }

  return (
    <div>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}

export default Logout;
