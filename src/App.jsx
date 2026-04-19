import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import ServiceCard from "./components/ServiceCard";
import BookingForm from "./components/bookingform"; // New
import Footer from "./components/Footer"; // New

function App() {
  return (
    <div>
      <Navbar />
      <Hero />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        <ServiceCard
          serviceName="Braids"
          price="15,000"
          duration="5hrs"
          description="Neat and lasting."
        />
        <ServiceCard
          serviceName="Locs"
          price="20,000"
          duration="3hrs"
          description="Professional install."
        />
      </div>

      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;
