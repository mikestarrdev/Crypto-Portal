import React from "react";

function Logout({ setUser }) {
  function handleLogout(e) {
    e.preventDefault();
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        console.log("user logged out");
        setUser(null);
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
