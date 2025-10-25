import React, { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
import booksData from "../data/booksData";

const BookList = () => {
  const [books, setBooks] = useState([]);

  // Simulate API Fetch
  useEffect(() => {
    setTimeout(() => {
      setBooks(booksData);
    }, 500);
  }, []);

  return (
    <div>
      <h2 className="section-title">Available Books</h2>
      {books.length === 0 ? (
        <div className="loading">
          <p>Loading books...</p>
        </div>
      ) : (
        <div className="book-grid">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;