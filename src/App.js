import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import { getAll, update, search } from "./BooksAPI";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";

const BooksApp = () => {
  const [booksData, setBooksData] = useState([]);
  const [searching, setSearching] = useState("");
  const [searchData, setSearchData] = useState([]);

  const selectedValue = (data, value) => {
    update(data, value);
    const newData = booksData.find((book) => book.id === data.id);
    newData.shelf = value;
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
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/search"
            element={
              <SearchPage
                searchData={searchData}
                booksData={booksData}
                setBooksData={setBooksData}
                searching={searching}
                setSearching={setSearching}
              />
            }
          />
          <Route
            path="/"
            element={
              <Home booksData={booksData} selectedValue={selectedValue} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default BooksApp;
