import { TypeAnimation } from "react-type-animation";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import About from "../about/About";
import "./home.css";

export default function Home({aboutRef, homeRef}) {
  return (
    <>
      <section id="home" className="homePage" ref={homeRef}>
        <div>
          <h1>Evylina Antao</h1>
          <TypeAnimation
            sequence={[
              "Junior Web Developer",
              1000,
              "Junior FullStack Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
          <button 
          onClick={() => {
            aboutRef.current?.scrollIntoView({
              behavior: 'smooth'
            })
          }}
          >
            <IoMdArrowDropdown style={{ height: "3em", width: "3em" }} />
          </button>
        </div>
      </section>
    </>
  );
}
