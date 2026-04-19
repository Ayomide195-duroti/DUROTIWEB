const Hero = () => {
  // This grabs "Mide's World" from your .env file
  const name = import.meta.env.VITE_BUSINESS_NAME;

  return (
    <header
      style={{ padding: "40px", textAlign: "center", background: "#fafafa" }}
    >
      <h1>Welcome to {name}</h1>
      <p>Premium Hair Styling for the Bold.</p>
    </header>
  );
};

export default Hero;
