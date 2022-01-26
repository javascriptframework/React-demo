import axios from "axios";
import React from "react";

export function AxiosWithoutCancel() {
  const handleSearchChange = async e => {
    const searchTerm = e.target.value
    const results = await axios.get(
      `http://localhost:4000/users?q=${searchTerm}`
    )
    console.log("Results for " + searchTerm + ": " + results.data)
  }

  return (
    <div style={{ marginTop: "3em", textAlign: "center" }}>
    <h2>Axios without Cancel</h2>
      <input
        style={{ width: "60%", height: "1.5rem" }}
        type="text"
        placeholder="Search"
        onChange={handleSearchChange}
      />
    </div>
  )
}


