import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div style={{ padding: "10px", backgroundColor: "#f5f5f5", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Buscar restaurantes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "5px", width: "300px" }}
      />
      <button onClick={handleSearch} style={{ padding: "5px 10px", marginLeft: "10px" }}>
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
