import React from "react";
import { useParams, Link } from "react-router-dom";
import booksData from "../data/booksData";

const BookDetail = () => {
  const { id } = useParams();
  const book = booksData.find((b) => b.id === parseInt(id));

  if (!book) return <p>Book not found!</p>;

  return (
    <div className="book-detail">
      <h2>{book.title}</h2>
      <h4>By {book.author}</h4>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#4b5563", margin: "1.5rem 0" }}>
        {book.description}
      </p>
      <div className="rating">
        ⭐ Rating: {book.rating}/5
      </div>
      <div>
        <Link to="/" className="back-link">
          ← Back to List
        </Link>
      </div>
    </div>
  );
};

export default BookDetail;