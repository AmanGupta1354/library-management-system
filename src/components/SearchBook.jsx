import React, { useState } from "react";
import "./SearchBook.css";

export default function SearchBook() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const sampleBooks = [
    { id: 1, title: "Atomic Habits", author: "James Clear" },
    { id: 2, title: "The Alchemist", author: "Paulo Coelho" },
    { id: 3, title: "1984", author: "George Orwell" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = sampleBooks.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="search-book">
      <h2>🔍 Search Book</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter book ID..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="results">
        {results.length > 0 ? (
          results.map((book) => (
            <div key={book.id} className="book-card">
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}
