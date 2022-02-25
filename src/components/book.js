import React from "react";
import DropDown from "./dropDown";

const Book = ({ book, selectedValue }) => {
  let img =
    "https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=590&h=800&D80F3D79-4382-49FA-BE4B4D0C62A5C3ED";
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 188,
            backgroundImage: `url(${(book.imageLinks &&
              book.imageLinks.smallThumbnail) ||
              img} )`,
          }}
        />
        <DropDown book={book} selectedValue={selectedValue} />
      </div>
      <div className="book-title">{book.title}</div>
      {book.authors && <div className="book-authors">{book.authors}</div>}
    </div>
  );
};

export default Book;
