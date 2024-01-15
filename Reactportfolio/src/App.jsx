import { useState } from "react";
import "./app.scss";
import Navbar from "./Components/Navbar";
import Test from "./Test";
import Hero from "./Components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <section id="Homepage">
          <Navbar />
          <Hero />
        </section>
        <section id="Projects">Parallax</section>
        <section id="Education">Services</section>
        <section id="Contact">Portfolio1</section>
        <section>Portfolio2</section>
        {/* <Test />
        <Test /> */}
      </div>
    </>
  );
}

export default App;
