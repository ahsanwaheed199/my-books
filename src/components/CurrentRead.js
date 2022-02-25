import React from "react";
import Book from "./book";

const CurrentRead = ({ booksData, selectedValue }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksData &&
            booksData
              .filter((val) => {
                if (val.shelf === "currentlyReading") {
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

export default CurrentRead;
