import React from "react";
import Book from "./book";

const WantToRead = ({ booksData, selectedValue }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want to Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksData &&
            booksData
              .filter((val) => {
                if (val.shelf === "wantToRead") {
                  return val;
                }
                return null;
              })
              .map((book, ind) => {
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

export default WantToRead;
