import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { IoMdArrowDropdown } from "react-icons/io";
import "./home.css";
import "animate.css";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home({ aboutRef, homeRef }) {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <>
      <section id="home" className="homePage" ref={homeRef}>
        <div>
          <h1 className="animate__animated animate__backInDown ">
            <span className="h1_text madimi">Hi, I'm</span>
            <br />
            <span className="name name_text">Evylina Antao</span> <br />
            <span className="h1_text madimi">and I am a</span>
          </h1>
          <TypeAnimation
            className="animate__animated animate__backInLeft madimi"
            sequence={["Junior Developer", 1000, "Junior Web Developer", 1000]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "1.5em",
              display: "inline-block",
              color: "var(--grayText)",
              letterSpacing: "0.1rem",
            }}
            repeat={Infinity}
          />
          <button
            onClick={() => {
              aboutRef.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <IoMdArrowDropdown
              style={{ height: "3em", width: "3em", color: "black" }}
            />
          </button>
        </div>
      </section>
    </>
  );
}
