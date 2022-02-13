import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data/data";
import "./index.css";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Hero />
      <div className="cards">
        {data.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
