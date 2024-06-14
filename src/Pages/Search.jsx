import React from "react";
import "../styles/Search.css";
const Search = () => {
  return (
    <div className="searchWrapper">
      <div className="search">
        <h1>Search your fav anime</h1>
        <input type="text" className="textbox" />
      </div>
    </div>
  );
};

export default Search;
