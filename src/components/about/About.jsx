import "./about.css";
import StackIcon from "tech-stack-icons";
import { useEffect } from "react";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About({ aboutRef }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <h2 ref={aboutRef} className="madimi flex justify-center" data-aos="zoom-in-up" style={{letterSpacing: '2px'}}>About Me</h2>
      <section
        id="about"
        
        data-aos="zoom-in-up"
        data-aos-duration="1500"
      >
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
            <div className={`icon-container`} data-aos="flip-left">
              <StackIcon
                name="html5"
              />
              <div className="icon-name  madimi">HTML5</div>
            </div>
            <div className={`icon-container `} data-aos="flip-left">
              <StackIcon name="css3" />
              <div className="icon-name madimi">CSS</div>
            </div>
            <div className={`icon-container `} data-aos="flip-left">
              <StackIcon name="js" />
              <div className="icon-name madimi">JavaScript</div>
            </div>
          </div>
          <div className="row">
            <div className={`icon-container `} data-aos="flip-left">
              <StackIcon name="python" />
              <div className="icon-name madimi">Python</div>
            </div>
            <div className={`icon-container `} data-aos="flip-left">
              <StackIcon name="reactjs" />
              <div className="icon-name madimi">React.js</div>
            </div>
            <div className={`icon-container `} data-aos="flip-left">
              <StackIcon name="vuejs" />
              <div className="icon-name madimi">Vue.js</div>
            </div>
          </div>
          <div className="row">
            <div className={`icon-container `} data-aos="flip-left">
              <StackIcon name="bootstrap5" />
              <div className="icon-name madimi">Bootstrap</div>
            </div>
            <div className={`icon-container `} data-aos="flip-left">
              <StackIcon name="materialui" />
              <div className="icon-name madimi">MaterialUI</div>
            </div>
            <div className={`icon-container `} data-aos="flip-left">
              <StackIcon name="sass" />
              <div className="icon-name madimi">SASS</div>
            </div>
          </div>
          <div className="row">
            <div className={`icon-container `} data-aos="flip-left">
              <StackIcon name="tailwindcss" />
              <div className="icon-name madimi">Tailwind</div>
            </div>
            <div className={`icon-container `} data-aos="flip-left">
              <StackIcon name="nodejs" />
              <div className="icon-name madimi">Node.js</div>
            </div>
            <div className={`icon-container `} data-aos="flip-left">
              <StackIcon name="mongodb" />
              <div className="icon-name madimi">MongoDB</div>
            </div>
          </div>
          <div className="row">
            <div className={`icon-container `} data-aos="flip-left">
              <StackIcon name="django" />
              <div className="icon-name madimi">Django</div>
            </div>
            <div className={`icon-container `} data-aos="flip-left">
              <StackIcon name="postgresql" />
              <div className="icon-name madimi">PostgreSQL</div>
            </div>
            <div className={`icon-container `} data-aos="flip-left">
              <StackIcon name="postman" />
              <div className="icon-name madimi">Postman</div>
            </div>
          </div>
          <div className="row">
            <div className={`icon-container `} data-aos="flip-left">
              <StackIcon name="github" />
              <div className="icon-name madimi">GitHub</div>
            </div>
            <div className={`icon-container `} data-aos="flip-left">
              <StackIcon name="railway" />
              <div className="icon-name madimi">Railway</div>
            </div>
            <div className={`icon-container `} data-aos="flip-left">
              <StackIcon name="aws" />
              <div className="icon-name madimi">AWS</div>
            </div>
          </div>
          <div className="row">
            <div className={`icon-container `} data-aos="flip-left">
              <StackIcon name="netlify2" />
              <div className="icon-name madimi">Netlify</div>
            </div>
            <div className={`icon-container `} data-aos="flip-left">
              <StackIcon name="npm2" />
              <div className="icon-name madimi">NPM</div>
            </div>
            <div>
              <div className={`icon-container  express`} data-aos="flip-left">
                <div className="">ex</div>
              </div>
              <div
                className={`icon-name madimi`}
                data-aos="flip-left"
                style={{ marginTop: "0" }}
              >
                Express
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
