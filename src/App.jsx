import About from "./components/About";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

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

          <div id="product">
            <Product />
          </div>

          <div id="contact">
            <Contact />
          </div>

          <div id="faq">
            <Faq />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
