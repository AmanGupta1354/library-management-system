import React, { useState } from "react";
import "./Books.css";

const Books = () => {
  const [books, setBooks] = useState([
    { id: "B101", title: "React Basics", author: "Dan Abramov", category: "Programming", available: true },
    { id: "B102", title: "Java Fundamentals", author: "James Gosling", category: "Programming", available: false },
    { id: "B103", title: "Python for Everyone", author: "Guido van Rossum", category: "Programming", available: true },
    { id: "B104", title: "Clean Code", author: "Robert C. Martin", category: "Software Engineering", available: true },
    { id: "B105", title: "AI Revolution", author: "Andrew Ng", category: "Artificial Intelligence", available: false },
  ]);

  return (
    <div className="books-container">
      <h2>📚 Library Books</h2>
      <table className="books-table">
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.category}</td>
              <td className={book.available ? "available" : "unavailable"}>
                {book.available ? "✅ Available" : "❌ Checked Out"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
