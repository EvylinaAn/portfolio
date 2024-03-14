import { useEffect } from "react";
import "./projects.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { RiHtml5Line } from "react-icons/ri";
import { TbBrandCss3 } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandMongodb } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { TbBrandDjango } from "react-icons/tb";
import { SiPostgresql } from "react-icons/si";

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
        <div className="singleProject" data-aos="zoom-in">
          <div className="projectImg" id="project1" data-aos="zoom-in">
            <div></div>
          </div>
          <div className="aboutProject" data-aos="zoom-in">
            <h3 className="projectName text-2xl madimi">Retro Snake</h3>
            <h5 className="groutTime">Solo | 1 week</h5>
            <ul className="techStack my-2">
              <li>
                <RiHtml5Line />
              </li>
              <li>
                <TbBrandCss3 />
              </li>
              <li>
                <RiJavascriptLine />
              </li>
            </ul>
            <p className="projectDesc mt-2">
              A classic Snake game using HTML, CSS, and JavaScript,
              demonstrating my proficiency in front-end development.
            </p>
            <div className="projectLinks mt-4">
              <Link to="https://evyssnakegame.netlify.app/" target="blank">
                <button className="appLink btn btn-sm btn-outline btn-primary">
                  Project
                </button>
              </Link>
              <Link
                to="https://github.com/EvylinaAn/Unit1_Snake_Game"
                target="blank"
                className="ml-2"
              >
                <button className="gitHubLink btn btn-outline btn-primary btn-sm">
                  GitHub
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="singleProject" data-aos="zoom-in">
          <div className="projectImg" id="project2" data-aos="zoom-in">
            <div></div>
          </div>
          <div className="aboutProject" data-aos="zoom-in">
            <h3 className="projectName text-2xl madimi">BEE</h3>
            <h5 className="groutTime">Solo | 1 week</h5>
            <ul className="techStack my-2">
              <li>
                <TbBrandMongodb />
              </li>
              <li>
                <SiExpress />
              </li>
              <li>
                <FaVuejs />
              </li>
              <li>
                <FaNodeJs />
              </li>
            </ul>
            <p className="projectDesc mt-2">
              A travel application using the MEVN stack showcasing my ability to
              develop full-stack CRUDable applications independently using
              Vue.js.
            </p>
            <div className="projectLinks mt-4">
              <Link to="https://zingy-panda-b32083.netlify.app/" target="blank">
                <button className="appLink btn btn-sm btn-outline btn-primary">
                  Project
                </button>
              </Link>
              <Link
                to="https://github.com/EvylinaAn/unit2_Project_FrontEnd"
                target="blank"
                className="ml-2"
              >
                <button className="gitHubLink btn btn-outline btn-primary btn-sm">
                  GitHub
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="singleProject" data-aos="zoom-in">
          <div className="projectImg" id="project3" data-aos="zoom-in">
            <div></div>
          </div>
          <div className="aboutProject" data-aos="zoom-in">
            <h3 className="projectName text-2xl madimi">Journée</h3>
            <h5 className="groutTime">Group | 1 week</h5>
            <ul className="techStack my-2">
              <li>
                <TbBrandMongodb />
              </li>
              <li>
                <SiExpress />
              </li>
              <li>
                <IoLogoReact />
              </li>
              <li>
                <FaNodeJs />
              </li>
            </ul>
            <p className="projectDesc mt-2">
              A day planner using the MERN stack showcasing my ability to work
              as a team ready for an actual workspace environment by
              collaborating on GitHub, using React.js to develop a fully
              functional CRUDable application. I took on the task of
              implementing user authentication by utilizing Google oAuth with
              Passport. Our application had 3 main CRUDable items, namely
              To-Dos, Schedule and Daily Check where I looked after the
              implementation of the to-do’s and helped my teammate with the
              daily checker. We also each had a part to play with the styling of
              the application.
            </p>
            <div className="projectLinks mt-4">
              <Link to="https://journee.site/" target="blank">
                <button className="appLink btn btn-sm btn-outline btn-primary">
                  Project
                </button>
              </Link>
              <Link
                to="https://github.com/EvylinaAn/unit3project-frontend"
                target="blank"
                className="ml-2"
              >
                <button className="gitHubLink btn btn-outline btn-primary btn-sm">
                  GitHub
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="singleProject" data-aos="zoom-in">
          <div className="projectImg" id="project4" data-aos="zoom-in">
            <div></div>
          </div>
          <div className="aboutProject" data-aos="zoom-in">
            <h3 className="projectName text-2xl madimi">That Fashion tale</h3>
            <h5 className="groutTime">Solo | 1 week</h5>
            <ul className="techStack my-2">
              <li>
                <SiPostgresql />
              </li>
              <li>
                <IoLogoReact />
              </li>
              <li>
                <TbBrandDjango />
              </li>
            </ul>
            <p className="projectDesc mt-2">
              A personal blog using React.js, Django REST framework, and
              PostgreSQL, showcasing my versatility in integrating different
              languages and technologies to build functional and user-friendly
              web applications.
            </p>
            <div className="projectLinks mt-4">
              <Link to="https://blogthatfashiontale.netlify.app/" target="blank">
                <button className="appLink btn btn-sm btn-outline btn-primary">
                  Project
                </button>
              </Link>
              <Link
                to="https://github.com/EvylinaAn/Unit4_Project_Frontend"
                target="blank"
                className="ml-2"
              >
                <button className="gitHubLink btn btn-outline btn-primary btn-sm">
                  GitHub
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
