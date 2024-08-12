// import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />
      <div className="cards">
        {/* Card Component */}
        <Card title="Card Title 1" desc="Card Description" />
        <Card title="Card Title 2" desc="Card Description" />
        <Card title="Card Title 3" desc="Card Description" />
        <Card title="Card Title 4" desc="Card Description" />
      </div>
      {/* Footer Component */}
      <Footer />
    </>
  );
}

export default App;
