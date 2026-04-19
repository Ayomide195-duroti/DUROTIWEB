const BookingForm = () => {
  return (
    <section
      style={{
        padding: "40px",
        maxWidth: "400px",
        margin: "0 auto",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h3>Book an Appointment</h3>
      <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          placeholder="Your Name"
          style={{ padding: "10px" }}
        />
        <input
          type="email"
          placeholder="Email Address"
          style={{ padding: "10px" }}
        />
        <select style={{ padding: "10px" }}>
          <option>Select Service</option>
          <option>Braids</option>
          <option>Silk Press</option>
        </select>
        {/* Reusable Button style */}
        <button
          type="submit"
          style={{
            background: "gold",
            color: "black",
            padding: "10px",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
          }}
        >
          Confirm Booking
        </button>
      </form>
    </section>
  );
};

export default BookingForm;
