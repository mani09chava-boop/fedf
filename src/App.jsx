import React from "react";
import { Routes, Route } from "react-router-dom";
import BookList from "./pages/BookList";
import BookDetail from "./components/BookDetail";

function App() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <h1>Book Explorer</h1>
        </div>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App
