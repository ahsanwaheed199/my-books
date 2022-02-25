import React from "react";
import DropDown from "./DropDown";
const Book = ({ book, selectedValue }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 188,
            backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
          }}
        />
        <DropDown book={book} selectedValue={selectedValue} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
      <div className="book-authors">{book.shelf}</div>
    </div>
  );
};

export default Book;
