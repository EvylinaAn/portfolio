import "./nav.css";
import React, { useState  } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Navigation({
  aboutRef,
  projectsRef,
  experienceRef,
  homeRef,
  educationRef,
  interestsRef,
  contactRef,
  footerRef,
  skillsRef
}) {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    // <div className="navbar bg-base-100">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />
    //         </svg>
    //       </div>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
    //       >
    //         <li>
    //           <a href="#home">Home</a>
    //         </li>
    //         <li
    //           className="horizontalNav"
    //           onClick={() => {
    //             aboutRef.current?.scrollIntoView({
    //               behavior: "smooth",
    //             });
    //           }}
    //         >
    //           About
    //         </li>
    //         <li>
    //           <a href="#projects">Projects</a>
    //         </li>
    //         <li>
    //           <a href="#experience">Experience</a>
    //         </li>
    //         <li>
    //           <a href="#education">Education</a>
    //         </li>
    //         <li>
    //           <a href="#interests">Interests</a>
    //         </li>
    //         {/* <li>
    //           <a href="#contact">Contact</a>
    //         </li> */}
    //         <li
    //           className="horizontalNav"
    //           onClick={() => {
    //             footerRef.current?.scrollIntoView({
    //               behavior: "smooth",
    //             });
    //           }}
    //         >
    //           Contact
    //         </li>
    //       </ul>
    //     </div>
    //     {/* <a className="btn btn-ghost text-xl">EA</Link> */}
    //   </div>
    //   <div className="navbar-center hidden lg:flex">
    //     <ul className="menu menu-horizontal px-1">
    //       <li
    //         className="horizontalNav"
    //         onClick={() => {
    //           aboutRef.current?.scrollIntoView({
    //             behavior: "smooth",
    //           });
    //         }}
    //       >
    //         About
    //       </li>
    //       <li
    //         className="horizontalNav"
    //         onClick={() => {
    //           projectsRef.current?.scrollIntoView({
    //             behavior: "smooth",
    //           });
    //         }}
    //       >
    //         Projects
    //       </li>
    //       <li
    //         className="horizontalNav"
    //         onClick={() => {
    //           experienceRef.current?.scrollIntoView({
    //             behavior: "smooth",
    //           });
    //         }}
    //       >
    //         {" "}
    //         Experience
    //       </li>
    //       <li
    //         className="horizontalNav"
    //         onClick={() => {
    //           homeRef.current?.scrollIntoView({
    //             behavior: "smooth",
    //           });
    //         }}
    //       >
    //         {" "}
    //         EA
    //       </li>
    //       <li
    //         className="horizontalNav"
    //         onClick={() => {
    //           educationRef.current?.scrollIntoView({
    //             behavior: "smooth",
    //           });
    //         }}
    //       >
    //         Education
    //       </li>
    //       <li
    //         className="horizontalNav"
    //         onClick={() => {
    //           interestsRef.current?.scrollIntoView({
    //             behavior: "smooth",
    //           });
    //         }}
    //       >
    //         Interests
    //       </li>
    //       <li
    //         className="horizontalNav"
    //         onClick={() => {
    //           footerRef.current?.scrollIntoView({
    //             behavior: "smooth",
    //           });
    //         }}
    //       >
    //         Contact
    //       </li>
    //     </ul>
    //   </div>
    // </div>

    <Navbar
      collapseOnSelect
      expand="250px"
      className={expanded ? "bg-white-expanded" : "bg-none"}
    >
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleToggle}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                aboutRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                skillsRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                projectsRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                experienceRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                footerRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
