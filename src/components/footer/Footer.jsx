import "./footer.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineMail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import Divider from "@mui/material/Divider";
import { BsFillSendFill } from "react-icons/bs";
import { GrContact } from "react-icons/gr";

export default function Footer({ footerRef }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5m0ah4g", "template_srobx3j", form.current, {
        publicKey: "KDxlCFiHYcoL1x2XF",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="footerSection" ref={footerRef}>
      <footer>
        <div className="footerContent">
          <div className="social">
            {/* <div className="footer_text"> */}
              <h3 id="footer_heading">Get In Touch&#xa0;<GrContact className="msgIcon"/></h3>
              <p>
                Want to get to know me better ? Let's grab a coffee(in-person or
                virtually)! You can also find me on socail media or just drop a
                message below.
              </p>
              <ul className="footer_ul">
                <li>
                  <MdOutlineMail className="logos" />
                </li>
                <li>
                  <CiLinkedin className="logos" />
                </li>
                <li>
                  <IoLogoGithub className="logos" />
                </li>
                <li>
                  <IoLogoInstagram className="logos" />
                </li>
              </ul>
            {/* </div> */}
          </div>
          <Divider flexItem className="smallHR">Or</Divider>
          <div className="emailJSForm">
            <form ref={form} onSubmit={sendEmail}>
              <label className="eb">Your Name</label>
              <input
                type="text"
                name="user_name"
                className="input_box"
                required
              />
              <label>Your Email</label>
              <input
                type="email"
                name="user_email"
                className="input_box"
                required
              />
              <label>Message</label>
              <textarea name="message" className="input_box" required />
              <button
                type="submit"
                className="btn btn-outline btn-primary btn-xs mt-3"
              >
                <BsFillSendFill />
              </button>
            </form>
          </div>
        </div>
        <div className="footerRights">Coded with &#10084; by Evylina</div>
      </footer>
    </section>
  );
}
