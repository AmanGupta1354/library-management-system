import { useState } from "react";
import "./CheckInOut.css";

function CheckInOut() {
  const [mode, setMode] = useState("checkin"); // "checkin" or "checkout"
  const [formData, setFormData] = useState({
    userId: "",
    userName: "",
    bookId: "",
    bookName: "",
    publisher: "",
    date: "",
    returnDate: "",
    condition: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `✅ ${mode === "checkin" ? "Check-In" : "Check-Out"} Successful!\n\n` +
        JSON.stringify(formData, null, 2)
    );

    // Reset form after submit
    setFormData({
      userId: "",
      userName: "",
      bookId: "",
      bookName: "",
      publisher: "",
      date: "",
      returnDate: "",
      condition: "",
    });
  };

  return (
    <div className="check-container">
      <div className="check-card">
        {/* Toggle Buttons */}
        <div className="toggle-buttons">
          <button
            className={mode === "checkin" ? "active" : ""}
            onClick={() => setMode("checkin")}
            type="button"
          >
            📗 Check-In
          </button>
          <button
            className={mode === "checkout" ? "active" : ""}
            onClick={() => setMode("checkout")}
            type="button"
          >
            📕 Check-Out
          </button>
        </div>

        {/* Form */}
        <form className="check-form" onSubmit={handleSubmit}>
          {/* Common fields */}
          <label>User ID :</label>
          <input
            type="text"
            name="userId"
            placeholder="Enter User ID"
            value={formData.userId}
            onChange={handleChange}
          />

          <label>Book ID :</label>
          <input
            type="text"
            name="bookId"
            placeholder="Enter Book ID"
            value={formData.bookId}
            onChange={handleChange}
          />

          <label>Date :</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />

          {/* Fields visible only in CHECK-OUT */}
          {mode === "checkout" && (
            <>
              <label>User Name :</label>
              <input
                type="text"
                name="userName"
                placeholder="Enter User Name"
                value={formData.userName}
                onChange={handleChange}
              />

              <label>Book Name :</label>
              <input
                type="text"
                name="bookName"
                placeholder="Enter Book Name"
                value={formData.bookName}
                onChange={handleChange}
              />

              <label>Publisher :</label>
              <input
                type="text"
                name="publisher"
                placeholder="Enter Publisher"
                value={formData.publisher}
                onChange={handleChange}
              />

              <label>Return Date :</label>
              <input
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
              />

              <label>Book Condition :</label>
              <textarea
                name="condition"
                placeholder="Please mention the book condition, damages (if any)..."
                value={formData.condition}
                onChange={handleChange}
              />
            </>
          )}

          <button type="submit">
            {mode === "checkin" ? "✅ Submit Check-In" : "📤 Submit Check-Out"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CheckInOut;
