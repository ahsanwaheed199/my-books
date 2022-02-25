import React from "react";

const DropDown = ({ book, selectedValue }) => {
  return (
    <div className="book-shelf-changer">
      <select
        value={book.shelf}
        onChange={(e) => selectedValue(book, e.target.value)}
      >
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">Remove</option>
      </select>
    </div>
  );
};

export default DropDown;
