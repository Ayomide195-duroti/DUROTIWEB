const ServiceCard = ({ serviceName, price, duration, description }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        margin: "10px",
        width: "250px",
        textAlign: "center",
      }}
    >
      <h3>{serviceName}</h3>
      <p style={{ color: "#d4af37", fontWeight: "bold" }}>{price} Naira</p>
      <p>
        <small>Duration: {duration}</small>
      </p>
      <p>{description}</p>
      <button
        style={{
          background: "black",
          color: "white",
          padding: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Book This Style
      </button>
    </div>
  );
};

export default ServiceCard;
