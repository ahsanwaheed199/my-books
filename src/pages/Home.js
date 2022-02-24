import React from "react";
import { Link } from "react-router-dom";
import Book from "../components/book";

const Home = ({ booksData, selectedValue }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>My Books</h1>
        <h2>
          <Link to="/">Home</Link>
        </h2>
        <h2>
          <Link to="/search">Search</Link>
        </h2>
      </div>
      <div className="list-books-content">
        <div>
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
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {booksData &&
                  booksData
                    .filter((val) => {
                      if (val.shelf === "read") {
                        return val;
                      }
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
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default Home;
