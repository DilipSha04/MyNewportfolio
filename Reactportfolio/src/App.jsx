import { useState } from "react";
import "./app.scss";
import Navbar from "./Components/Navbar";
import Test from "./Test";
import Hero from "./Components/Hero";
import AboutMe from "./Components/AboutMe";
import AboutMeInfo from "./Components/AboutMeInfo";
import Skill from "./Components/Skill";
import Projects from "./Components/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <section id="Homepage">
          <Navbar />
          <Hero />
        </section>
        <section id="About Me">
          <AboutMe type="aboutMe" />
        </section>
        <section id="About Me">
          <AboutMeInfo />
        </section>
        <section><Skill/></section>
        <section id="Projects">
          <AboutMe type="project" />
        </section>
        <Projects />
        <section id="Contact">Portfolio1</section>
        {/* <Test />
        <Test /> */}
         {/* “Tell me and I forget, teach me and I may remember, involve me and I learn.” — Benjamin Franklin
         Make it work, make it right, make it fast. – Kent Beck */}
      </div>
    </>
  );
}

export default App;
