import React, { useState } from "react";
import "./AddBooks.css";

export default function AddBooks() {
  const [formData, setFormData] = useState({
    bookId: "",
    title: "",
    author: "",
    publisher: "",
    year: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book Added:", formData);
    alert("Book added successfully!");
    setFormData({
      bookId: "",
      title: "",
      author: "",
      publisher: "",
      year: "",
      category: "",
    });
  };

  return (
    <div className="add-books-container">
      <h2>📚 Add New Book</h2>
      <form className="add-books-form" onSubmit={handleSubmit}>
        <label>
          Book ID:
          <input
            type="text"
            name="bookId"
            value={formData.bookId}
            onChange={handleChange}
            placeholder="Enter Book ID"
            required
          />
        </label>

        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter Book Title"
            required
          />
        </label>

        <label>
          Author:
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Enter Author Name"
          />
        </label>

        <label>
          Publisher:
          <input
            type="text"
            name="publisher"
            value={formData.publisher}
            onChange={handleChange}
            placeholder="Enter Publisher"
          />
        </label>

        <label>
          Year:
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            placeholder="Enter Publication Year"
          />
        </label>

        <label>
          Category:
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Enter Category (Fiction, Science, etc.)"
          />
        </label>

        <button type="submit" className="submit-btn">Add Book</button>
      </form>
    </div>
  );
}
