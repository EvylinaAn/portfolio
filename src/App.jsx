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
      <About aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef}/>
      <Experience experienceRef={experienceRef}/>
      <Education educationRef={educationRef}/>
      <Interests interestsRef={interestsRef}/>
      <Contact contactRef={contactRef}/>
      <Footer />
    </div>
  );
}

export default App;
