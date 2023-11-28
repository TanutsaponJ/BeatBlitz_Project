import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      <main>
        <div>
          <Home />
          <About />
        </div>
      </main>
    </div>
  );
}

export default App;
