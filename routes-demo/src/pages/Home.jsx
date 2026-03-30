import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {

  const navigate = useNavigate();
  const [name, setName] = useState(""); // ← "" empty string as default

  function GoToUserPage() {
    navigate(`/user/${name}`);
  }

  return (
    <>
      <h1>Welcome, this Home Page</h1>
      <input
        type="text"
        placeholder="Enter your friends name"
        onChange={(e) => { setName(e.target.value); }}
        value={name}
      />
      <button onClick={() => { GoToUserPage(); }}>Proceed</button>
    </>
  );
}

export default HomePage;

