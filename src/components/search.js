import React from "react";
import { search, update } from "../BooksAPI";
import Book from "./book";

const Search = ({ searchData,setBooksData, booksData }) => {
  const handleCallback = (childData, e) => {
    update(childData, e);
    childData.shelf = e;
    const newSerchData = booksData.filter((val) => val.id !== childData.id);
    setBooksData([...newSerchData, childData]);
  };

  if (searchData && searchData.error) {
    return <h1> {searchData.error} </h1>;
  }

  return (
    <div>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {searchData &&
            searchData.map((book, ind) => {
              return (
                <li key={ind}>
                  <Book book={book} handler={handleCallback} />
                </li>
              );
            })}
        </ol>
      </div>
    </div>
  );
};

export default Search;
