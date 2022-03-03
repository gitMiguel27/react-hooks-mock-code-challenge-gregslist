import React from "react";

function Search({ search, setSearch }) {

  function searchChange(event) {
    setSearch(event.target.value);
  }

  return (
    <form className="searchbar">
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={searchChange}
      />
    </form>
  );
}

export default Search;
