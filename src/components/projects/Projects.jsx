import React from "react";
import "./projects.css";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";


export default function Projects({ projectsRef }) {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <section id="projects" ref={projectsRef}>
      <div className="projectsDiv">
        <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="indicator"
            style={{ pathLength: scrollXProgress }}
          />
        </svg>
        <ul className="projectUL" ref={ref}>
          <li className="projectLI" id="one"></li>
          <li className="projectLI" id="two"></li>
          <li className="projectLI" id="three"></li>
          <li className="projectLI" id="four"></li>
        </ul>
      </div>
    </section>
  );
}
