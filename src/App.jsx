import { useRef } from "react";

import "./App.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/nav/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import Interests from "./components/interests/Interests";
import Contact from "./components/contact/Contact";

function App() {
  const aboutRef = useRef();
  const projectsRef = useRef();
  const experienceRef = useRef();
  const homeRef = useRef();
  const educationRef = useRef();
  const interestsRef = useRef();
  const contactRef = useRef();

  console.log(aboutRef);
  return (
    <div className="App">
      <Nav
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        experienceRef={experienceRef}
        homeRef={homeRef}
        educationRef={educationRef}
        interestsRef={interestsRef}
        contactRef={contactRef}
      />
      <Home aboutRef={aboutRef} homeRef={homeRef}/>
      <div className="betSections">~~~~~~~~</div>
      <About aboutRef={aboutRef} />
      <div className="betSections">~~~~~~~~</div>
      {/* <div className="betSections"></div> */}
      <Projects projectsRef={projectsRef}/>
      {/* <div className="betSections"></div> */}
      <Experience experienceRef={experienceRef}/>
      {/* <div className="betSections"></div> */}
      <Education educationRef={educationRef}/>
      {/* <div className="betSections"></div> */}
      <Interests interestsRef={interestsRef}/>
      {/* <div className="betSections"></div> */}
      <Contact contactRef={contactRef}/>
      {/* <div className="betSections"></div> */}
      <Footer />
    </div>
  );
}

export default App;
