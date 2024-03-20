import "./nav.css";
import React, { useState, useRef, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

export default function Navigation({
  aboutRef,
  projectsRef,
  experienceRef,
  homeRef,
  educationRef,
  interestsRef,
  contactRef,
  footerRef,
  skillsRef,
}) {

  useEffect(() => {
    AOS.init({ duration: 300 });
  }, []);

  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setExpanded(!expanded);
  };


  const handleLinkClick = () => {
    setExpanded(false);
  };


  return (
    <Navbar
      ref={navbarRef}
      collapseOnSelect
      expanded={expanded}
      expand="250px"
      className={expanded ? "bg-white-expanded animate__animated animate__slideInDown" : "bg-none"}
    >
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleToggle}
        />
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
            className=""
              onClick={() => {
                homeRef.current?.scrollIntoView({
                  // behavior: "smooth",
                });
                handleLinkClick()
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                aboutRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
                handleLinkClick()
              }}
            >
              About/Skills
            </Nav.Link>
            {/* <Nav.Link
              onClick={() => {
                aboutRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
                handleLinkClick()
              }}
            >
              Skills
            </Nav.Link> */}
            <Nav.Link
              onClick={() => {
                projectsRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
                handleLinkClick()
              }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                experienceRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
                handleLinkClick()
              }}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                footerRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
                handleLinkClick()
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
