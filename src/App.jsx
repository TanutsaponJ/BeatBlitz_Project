import About from "./components/About";
import Features from "./components/Features";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      <main>
        <div>
          <div id="home">
            <Home />
          </div>

          <div id="about">
            <About />
          </div>

          <div id="features">
            <Features />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
