import React from "react";
import { Link } from "react-router-dom";
import CurrentRead from "../components/CurrentRead";
import Read from "../components/Read";
import WantToRead from "../components/WantToRead";

const Home = ({ booksData, selectedValue }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>My Books</h1>
      </div>
      <div className="list-books-content">
        <div>
          <CurrentRead booksData={booksData} selectedValue={selectedValue} />
          <WantToRead booksData={booksData} selectedValue={selectedValue} />
          <Read booksData={booksData} selectedValue={selectedValue} />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
