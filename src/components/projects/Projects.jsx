import { useEffect } from "react";
import "./projects.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects({ projectsRef }) {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section id="projects" ref={projectsRef}>
      <div className="projectDiv">
        <h2
        data-aos="zoom-in"
          className="w-full flex justify-center madimi"
          style={{ letterSpacing: "2px" }}
        >
          Projects
        </h2>
        <div className="singleProject" >
          <div className="projectImg" id="project1" data-aos="zoom-in">
          <div></div>
          </div>
          <div className="aboutProject" data-aos="zoom-in">
            <h3 className="projectName"></h3>
            <ul className="techStack"></ul>
            <p className="projectDesc"></p>
            <div className="projectLinks">
              <button className="appLink"></button>
              <button className="gitHubLink"></button>
            </div>            
          </div>
        </div>
        <div className="singleProject">
          <div className="projectImg" id="project2" data-aos="zoom-in">
            <div></div>
          </div>
          <div className="aboutProject" data-aos="zoom-in">
            <h3 className="projectName"></h3>
            <ul className="techStack"></ul>
            <p className="projectDesc"></p>
            <div className="projectLinks">
              <button className="appLink"></button>
              <button className="gitHubLink"></button>
            </div>            
          </div>
        </div>
        <div className="singleProject">
          <div className="projectImg" id="project3" data-aos="zoom-in">
          <div></div>
          </div>
          <div className="aboutProject" data-aos="zoom-in">
            <h3 className="projectName"></h3>
            <ul className="techStack"></ul>
            <p className="projectDesc"></p>
            <div className="projectLinks">
              <button className="appLink"></button>
              <button className="gitHubLink"></button>
            </div>            
          </div>
        </div>
        <div className="singleProject">
          <div className="projectImg" id="project4" data-aos="zoom-in">
          <div></div>
          </div>
          <div className="aboutProject" data-aos="zoom-in">
            <h3 className="projectName"></h3>
            <ul className="techStack"></ul>
            <p className="projectDesc"></p>
            <div className="projectLinks">
              <button className="appLink"></button>
              <button className="gitHubLink"></button>
            </div>            
          </div>
        </div>
      </div>
    </section>
  );
}
