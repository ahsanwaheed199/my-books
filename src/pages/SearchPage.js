import React from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";

const SearchPage = ({
  searchData,
  setBooksData,
  booksData,
  searching,
  setSearching,
}) => {
  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" />
          </Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={searching}
              onChange={(e) => setSearching(e.target.value)}
            />
            <Search
              searchData={searchData}
              booksData={booksData}
              setBooksData={setBooksData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
