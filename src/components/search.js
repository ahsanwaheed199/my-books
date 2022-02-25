import React from "react";
import { update } from "../BooksAPI";
import Book from "./book";

const Search = ({ searchData, setBooksData, booksData }) => {
  const selectedValue = (data, value) => {
    update(data, value);
    data.shelf = value;
    const newSerchData = booksData.filter((val) => val.id !== data.id);
    setBooksData([...newSerchData, data]);
  };

  if (searchData && searchData.error) {
    return <h1> {searchData.error} </h1>;
  }

  return (
    <div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchData &&
            searchData.map((book, ind) => {
              return (
                <li key={ind}>
                  <Book book={book} selectedValue={selectedValue} />
                </li>
              );
            })}
        </ol>
      </div>
    </div>
  );
};

export default Search;
