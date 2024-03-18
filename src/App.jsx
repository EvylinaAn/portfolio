import { useRef } from "react";

import "./App.css";
import Nav from "./components/nav/Nav";
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
  
  return (
    <div className="App">
      <Nav
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        experienceRef={experienceRef}
        homeRef={homeRef}
        footerRef={footerRef}
      />
      <Home aboutRef={aboutRef} homeRef={homeRef}/>
      <About aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef}/>
      <Experience experienceRef={experienceRef}/>
      <Footer footerRef={footerRef} />
    </div>
  );
}

export default App;
