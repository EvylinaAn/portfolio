import "./about.css";
import StackIcon from "tech-stack-icons";
import { useState, useEffect } from "react";
import { motion, useTime, useTransform } from "framer-motion";

export default function About({ aboutRef }) {
  const [showIcons, setShowIcons] = useState(false);
  const [hasScrolledToAbout, setHasScrolledToAbout] = useState(false);

  // const time = useTime();
  // const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

  useEffect(() => {
    const currentRef = aboutRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasScrolledToAbout) {
          setShowIcons(true);
          setHasScrolledToAbout(true);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(currentRef);
    return () => {
      observer.unobserve(currentRef);
    };
  }, [aboutRef, setShowIcons, hasScrolledToAbout, setHasScrolledToAbout]);

  return (
    <section id="about" ref={aboutRef}>
      <div className={`brief ${showIcons ? "fade-in" : ""}`}>
        <div className="profile_pic"></div>
        <p>
          Originally from Goa, India, I'm Evylina Antao, but you can call me
          'Evy.' With a background in Fashion Design, my journey took a turn
          when I discovered a deep love for blogging.
          <br />
          <br />
          Encouraged by my family, I ventured into coding to create my own blog,
          where I quickly found a passion for software development. As I delved
          deeper into online courses, my enthusiasm for programming grew,
          ultimately leading me to invest in General Assembly's Software
          Engineering course.
          <br />
          <br />
          Now, with the course completed, I reflect on the resilience of my
          journey and the way I embraced change, fueled by both my passion for
          blogging and coding. Eager to embark on a tech career, I understand
          the value of continuous growth and am ready for the next chapter.
        </p>
      </div>
      <div className="skills">
        <div className="row">
          <div className={`icon-container ${showIcons ? "fade-in" : ""}`}>
            <StackIcon name="html5" />
            <div className="icon-name">HTML5</div>
          </div>
          {/* <div className="example-container">
            <motion.div style={{ rotate }}>
              <StackIcon name="html5" />
            </motion.div>
            <div className="rotate-p">HTML</div>
          </div> */}
          <div className={`icon-container ${showIcons ? "fade-in" : ""}`}>
            <StackIcon name="css3" />
            <div className="icon-name">CSS</div>
          </div>
          {/* <div className="example-container">
            <motion.div style={{ rotate }}>
              <StackIcon name="css3" />
            </motion.div>
            <div className="rotate-p">CSS</div>
          </div> */}
          <div className={`icon-container ${showIcons ? "fade-in" : ""}`}>
            <StackIcon name="js" />
            <div className="icon-name">JavaScript</div>
          </div>
          {/* <div className="example-container">
            <motion.div style={{ rotate }}>
              <StackIcon name="js" />
            </motion.div>
            <div className="rotate-p">JavaScript</div>
          </div>           */}
        </div>
        <div className="row">
          <div className={`icon-container ${showIcons ? "fade-in" : ""}`}>
            <StackIcon name="python" />
            <div className="icon-name">Python</div>
          </div>
          <div className={`icon-container ${showIcons ? "fade-in" : ""}`}>
            <StackIcon name="reactjs" />
            <div className="icon-name">React.js</div>
          </div>
          <div className={`icon-container ${showIcons ? "fade-in" : ""}`}>
            <StackIcon name="vuejs" />
            <div className="icon-name">Vue.js</div>
          </div>
        </div>
        <div className="row">
          <div className={`icon-container ${showIcons ? "fade-in" : ""}`}>
            <StackIcon name="bootstrap5" />
            <div className="icon-name">Bootstrap</div>
          </div>
          <div className={`icon-container ${showIcons ? "fade-in" : ""}`}>
            <StackIcon name="materialui" />
            <div className="icon-name">MaterialUI</div>
          </div>
          <div className={`icon-container ${showIcons ? "fade-in" : ""}`}>
            <StackIcon name="sass" />
            <div className="icon-name">SASS</div>
          </div>
        </div>
        <div className="row">
          <div className={`icon-container ${showIcons ? "fade-in" : ""}`}>
            <StackIcon name="tailwindcss" />
            <div className="icon-name">Tailwind</div>
          </div>
          <div className={`icon-container ${showIcons ? "fade-in" : ""}`}>
            <StackIcon name="nodejs" />
            <div className="icon-name">Node.js</div>
          </div>
          <div className={`icon-container ${showIcons ? "fade-in" : ""}`}>
            <StackIcon name="mongodb" />
            <div className="icon-name">MongoDB</div>
          </div>
        </div>
        <div className="row">
          <div className={`icon-container ${showIcons ? "fade-in" : ""}`}>
            <StackIcon name="django" />
            <div className="icon-name">Django</div>
          </div>
          <div className={`icon-container ${showIcons ? "fade-in" : ""}`}>
            <StackIcon name="postgresql" />
            <div className="icon-name">PostgreSQL</div>
          </div>
          <div className={`icon-container ${showIcons ? "fade-in" : ""}`}>
            <StackIcon name="postman" />
            <div className="icon-name">Postman</div>
          </div>
        </div>
        <div className="row">
          <div className={`icon-container ${showIcons ? "fade-in" : ""}`}>
            <StackIcon name="github" />
            <div className="icon-name">GitHub</div>
          </div>
          <div className={`icon-container ${showIcons ? "fade-in" : ""}`}>
            <StackIcon name="railway" />
            <div className="icon-name">Railway</div>
          </div>
          <div className={`icon-container ${showIcons ? "fade-in" : ""}`}>
            <StackIcon name="aws" />
            <div className="icon-name">AWS</div>
          </div>
        </div>
        <div className="row">
          <div className={`icon-container ${showIcons ? "fade-in" : ""}`}>
            <StackIcon name="netlify2" />
            <div className="icon-name">Netlify</div>
          </div>
          <div className={`icon-container ${showIcons ? "fade-in" : ""}`}>
            <StackIcon name="npm2" />
            <div className="icon-name">NPM</div>
          </div>
          <div>
            <div
              className={`icon-container ${showIcons ? "fade-in" : ""} express`}
            >
              <div className="">ex</div>
            </div>
            <div
              className={`icon-name ${showIcons ? "fade-in" : ""}`}
              style={{ marginTop: "0" }}
            >
              Express
            </div>
            {/* <div className="example-container">
              <motion.div style={{ rotate }}>
                <StackIcon name="npm2" />
              </motion.div>
              <div className="rotate-p">NPM</div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
