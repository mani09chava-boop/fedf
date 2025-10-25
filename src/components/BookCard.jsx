import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h3 style={{ margin: "0 0 0.5rem 0", color: "var(--text-color)" }}>{book.title}</h3>
      <p style={{ margin: "0 0 1rem 0", color: "#6b7280" }}>By {book.author}</p>
      <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "1rem" }}>
        <Link to={`/book/${book.id}`} className="view-details">
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default BookCard;