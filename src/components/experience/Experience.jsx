import { useEffect } from "react";
import "./experience.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

export default function Experience({ experienceRef }) {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <section id="experience" ref={experienceRef}>
      <div className="experienceDiv">
        <h2
          data-aos="zoom-in"
          className="w-full flex justify-center madimi"
          style={{ letterSpacing: "2px" }}
        >
          Experience
        </h2>
        <div className="singleExperience" data-aos="fade-right">
          <h4 className="expDetails text-xl" id="position">
            Student || Software Engineering Immersive,
          </h4>
          <h4 className="expDetails text-xl" id="company">
            General Assembly
          </h4>
          <h4 className="expDetails text-xl" id="duration">
            November 2023 - March 2024
          </h4>
          <ul className="experienceList">
            <li>
              During my intensive 4-month software engineering course at General
              Assembly, I acquired a robust foundation in fundamental
              programming concepts such as HTML, CSS, JavaScript (Vue.js &
              React.js). The course was structured with morning stand ups
              fulowed by classes that included live and recorded lessons,
              exercise labs, teamwork, work based problems and 4 main projects
              with a timeframe of a week for each project.
              <ol className="experienceListOL">
                <li>
                  Retro Snake - I developed a classic Snake game using HTML,
                  CSS, and JavaScript, demonstrating my proficiency in front-end
                  development.
                </li>
                <li>
                  Breezy Easy Escapade(BEE) - Next I built a travel application
                  using the MEVN stack showcasing my ability to develop
                  full-stack CRUDable applications independently using Vue.js.
                </li>
                <li>
                  Journée - As a group of 3, we created a day planner using the
                  MERN stack showcasing my ability to work as a team ready for
                  an actual workspace environment by collaborating on GitHub,
                  using React.js to develop a fully functional CRUDable
                  application. I took on the task of implementing user
                  authentication by utilizing Google oAuth with Passport. Our
                  application had 3 main CRUDable items, namely To-Dos, Schedule
                  and Daily Check where I looked after the implementation of the
                  to-do’s and helped my teammate with the daily checker. We also
                  each had a part to play with the styling of this application.
                </li>
                <li>
                  That Fashion Tale - For my final project, I decided to develop
                  a personal blog using React.js, Django REST framework, and
                  PostgreSQL, showcasing my versatility in integrating different
                  languages and technologies to build functional and
                  user-friendly web applications.
                </li>
              </ol>
            </li>
          </ul>
        </div>
        <div className="singleExperience" data-aos="fade-left">
          <h4 className="expDetails text-xl" id="position">
            Client Liaison Executive,
          </h4>
          <h4 className="expDetails text-xl" id="company">
            Primo Diamonds
          </h4>
          <h4 className="expDetails text-xl" id="duration">
            July 2023 - October 2023
          </h4>
          <ul className="experienceList">
            <li>
              Liaised with clients to boost sales, maintained detailed
              spreadsheets, and ensured customer satisfaction.
            </li>
            <li>
              Managed tasks efficiently while working remotely, utilising
              SalesForce, Outreach, Calendly and Microsoft Excel
            </li>
          </ul>
        </div>
        <div className="singleExperience" data-aos="fade-right">
          <h4 className="expDetails text-xl" id="position">
            Outbound Sales Consultant,
          </h4>
          <h4 className="expDetails text-xl" id="company">
            OneFamily ((Modern Family Finance))
          </h4>
          <h4 className="expDetails text-xl" id="duration">
            Duration
          </h4>
          <ul className="experienceList">
            <li>
              Exceeded sales targets by always looking for ways to make our
              investment products attractive to our customers with the aim of
              up-selling and expanding their investment portfolio.
            </li>
            <li>
              Network with a team to achieve sales targets and incentives
              utilising Noetica, Excel and Flame.
            </li>
          </ul>
        </div>
        <div className="singleExperience" data-aos="fade-left">
          <h4 className="expDetails text-xl" id="position">
            Call Transfer Consultant (Lead Trading),
          </h4>
          <h4 className="expDetails text-xl" id="company">
            Contact Solutions Limited
          </h4>
          <h4 className="expDetails text-xl" id="duration">
            August 2019 - April 2021
          </h4>
          <ul className="experienceList">
            <li>
              Achieved outstanding performance, trained newcomers and maintained
              exceptional call standards utilising Avaya and Noetica.
            </li>
          </ul>
        </div>
        <div className="singleExperience" data-aos="fade-right">
          <h4 className="expDetails text-xl" id="position">
            Sales Representative,
          </h4>
          <h4 className="expDetails text-xl" id="company">
            Ted Baker
          </h4>
          <h4 className="expDetails text-xl" id="duration">
            March 2019 - August 2021
          </h4>
          <ul className="experienceList">
            <li>
              Exceeded team targets, maintained merchandise displays and
              implemented sales strategies utilising Critix.
            </li>
          </ul>
        </div>
        <div className="singleExperience" data-aos="fade-left">
          <h4 className="expDetails text-xl" id="position">
            Assistant Manager Marketing,
          </h4>
          <h4 className="expDetails text-xl" id="company">
            Pepe Jeans
          </h4>
          <h4 className="expDetails text-xl" id="duration">
            June 2018 - February 2019
          </h4>
          <ul className="experienceList">
            <li>
              Implemented marketing strategies by organising events such as
              fashion shows and blogger meets, maximising social media
              strategies and collaborating with infulencers.
            </li>
            <li>
              Managed and trained a team of 5 by conducting regular motivational
              meetings.
            </li>
            <li>Software used: Shopper, Instagram, Facebook & Twitter.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
