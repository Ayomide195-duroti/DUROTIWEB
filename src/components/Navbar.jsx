const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        background: "#333",
        color: "#fff",
      }}
    >
      <h2>Mide's World</h2>
      <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
        <li>Home</li>
        <li>Services</li>
        <li>Book Now</li>
      </ul>
    </nav>
  );
};

export default Navbar;
