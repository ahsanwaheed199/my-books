import React, { useState, useEffect } from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import { getAll, update, search } from "./BooksAPI";
import Book from "./components/book";
import Search from "./components/search";

const BooksApp = () => {
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [booksData, setBooksData] = useState([]);
  const [searching, setSearching] = useState("");
  const [searchData, setSearchData] = useState([]);

  const handleCallback = (childData, e) => {
    update(childData, e);
    const updated = booksData.find((book) => book.id === childData.id);
    updated.shelf = e;
    const res = [...booksData];
    setBooksData(res);
  };

  useEffect(
    () => {
      getAll()
        .then((res) => setBooksData(res))
        .catch((err) => console.log(err));
      async function fetchData() {
        let response = await search(searching);
        setSearchData(response);
      }
      fetchData();
    },
    [searching]
  );

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <button
              className="close-search"
              onClick={() => setShowSearchPage(false)}
            >
              Close
            </button>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={searching}
                onChange={(e) => setSearching(e.target.value)}
              />
              <Search
                searchData={searchData}
                setSearchData={setSearchData}
                booksData={booksData}
                setBooksData={setBooksData}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid" />
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>My Books</h1>
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
                              <Book book={book} handler={handleCallback} />
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
                              <Book book={book} handler={handleCallback} />
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
                              <Book book={book} handler={handleCallback} />
                            </li>
                          );
                        })}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="open-search">
            <button onClick={() => setShowSearchPage(true)}>Add a book</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BooksApp;
