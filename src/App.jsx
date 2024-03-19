import { useRef } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navigation from "./components/nav/Navigation";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";

function App() {
  const aboutRef = useRef();
  const projectsRef = useRef();
  const experienceRef = useRef();
  const homeRef = useRef();
  const footerRef = useRef()
  const skillsRef = useRef()
  
  return (
    <div className="App">
      <Navigation
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        experienceRef={experienceRef}
        homeRef={homeRef}
        footerRef={footerRef}
        skillsRef={skillsRef}
      />
      <Home aboutRef={aboutRef} homeRef={homeRef}/>
      <About aboutRef={aboutRef} skillsRef={skillsRef}q/>
      <Projects projectsRef={projectsRef}/>
      <Experience experienceRef={experienceRef}/>
      <Footer footerRef={footerRef} />
    </div>
  );
}

export default App;
