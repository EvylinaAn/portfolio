import "./about.css";
import StackIcon from "tech-stack-icons";
import { useEffect } from "react";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About({ aboutRef }) {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <section
      ref={aboutRef}
      id="about"
      // data-aos-duration="1000"
    >
      <h2
        className="header_text flex justify-center"
        data-aos="zoom-in-up"
        style={{ letterSpacing: "2px" }}
      >
        About Me
      </h2>
      <div className="about_content" data-aos="zoom-in-up">
        <div className={`brief`}>
          <div className="profile_pic"></div>
          <p>
            Originally from Goa, India, I'm Evylina Antao, but you can call me
            'Evy.' With a background in Fashion Design, my journey took a turn
            when I discovered a deep love for blogging.
            <br />
            <br />
            Encouraged by my family, I ventured into coding to create my own
            blog, where I quickly found a passion for software development. As I
            delved deeper into online courses, my enthusiasm for programming
            grew, ultimately leading me to invest in General Assembly's Software
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
            <div className={`icon-container `} data-aos="flip-right">
              <StackIcon name="html5" />
              <div className="icon-name  header_text">HTML5</div>
            </div>
            <div className={`icon-container `} data-aos="flip-right">
              <StackIcon name="css3" />
              <div className="icon-name header_text">CSS3</div>
            </div>
            <div className={`icon-container `} data-aos="flip-right">
              <StackIcon name="js" />
              <div className="icon-name header_text">JavaScript</div>
            </div>
          </div>
          <div className="row">
            <div className={`icon-container `} data-aos="flip-right">
              <StackIcon name="python" />
              <div className="icon-name header_text">Python</div>
            </div>
            <div className={`icon-container `} data-aos="flip-right">
              <StackIcon name="reactjs" />
              <div className="icon-name header_text">React.js</div>
            </div>
            <div className={`icon-container `} data-aos="flip-right">
              <StackIcon name="vuejs" />
              <div className="icon-name header_text">Vue.js</div>
            </div>
          </div>
          <div className="row">
            <div className={`icon-container `} data-aos="flip-right">
              <StackIcon name="bootstrap5" />
              <div className="icon-name header_text">Bootstrap</div>
            </div>
            <div className={`icon-container `} data-aos="flip-right">
              <StackIcon name="materialui" />
              <div className="icon-name header_text">MaterialUI</div>
            </div>
            <div className={`icon-container `} data-aos="flip-right">
              <StackIcon name="sass" />
              <div className="icon-name header_text">SASS</div>
            </div>
          </div>
          <div className="row">
            <div className={`icon-container `} data-aos="flip-right">
              <StackIcon name="tailwindcss" />
              <div className="icon-name header_text">Tailwind</div>
            </div>
            <div className={`icon-container `} data-aos="flip-right">
              <StackIcon name="nodejs" />
              <div className="icon-name header_text">Node.js</div>
            </div>
            <div className={`icon-container `} data-aos="flip-right">
              <StackIcon name="mongodb" />
              <div className="icon-name header_text">MongoDB</div>
            </div>
          </div>
          <div className="row">
            <div className={`icon-container `} data-aos="flip-right">
              <StackIcon name="django" />
              <div className="icon-name header_text">Django</div>
            </div>
            <div className={`icon-container `} data-aos="flip-right">
              <StackIcon name="postgresql" />
              <div className="icon-name header_text">PostgreSQL</div>
            </div>
            <div className={`icon-container `} data-aos="flip-right">
              <StackIcon name="postman" />
              <div className="icon-name header_text">Postman</div>
            </div>
          </div>
          <div className="row">
            <div className={`icon-container `} data-aos="flip-right">
              <StackIcon name="github" />
              <div className="icon-name header_text">GitHub</div>
            </div>
            <div className={`icon-container `} data-aos="flip-right">
              <StackIcon name="railway" />
              <div className="icon-name header_text">Railway</div>
            </div>
            <div className={`icon-container `} data-aos="flip-right">
              <StackIcon name="aws" />
              <div className="icon-name header_text">AWS</div>
            </div>
          </div>
          <div className="row">
            <div className={`icon-container `} data-aos="flip-right">
              <StackIcon name="netlify2" />
              <div className="icon-name header_text">Netlify</div>
            </div>
            <div className={`icon-container `} data-aos="flip-right">
              <StackIcon name="npm2" />
              <div className="icon-name header_text">NPM</div>
            </div>
            <div data-aos="flip-right">
              <div className={`icon-container  express`}>
                <div className="">ex</div>
              </div>
              <div
                className={`icon-name header_text`}
                style={{ marginTop: "0" }}
              >
                Express
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
