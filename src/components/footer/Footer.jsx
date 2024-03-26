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
import toast, { Toaster } from "react-hot-toast";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { HiHeart } from "react-icons/hi";

export default function Footer({ footerRef }) {
  const form = useRef();

  const notify = () => toast.success('Message sent successfully.', {
    style: {
      background: 'rgb(0, 170, 110)', 
      padding: '1em',
      color: 'white',
      fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Vazirmatn, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"
    },
  });

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
          notify()
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
            <h3 id="footer_heading">
              Get In Touch&#xa0;
              <GrContact className="msgIcon" />
            </h3>
            <p style={{color: 'rgba(107, 106, 106, 0.901)'}}>
              Want to get to know me better ? Let's grab a coffee (in-person or
              virtually)! You can also find me on social media or just drop a
              message below.
            </p>
            <ul className="footer_ul">
              <li>
                <a href="mailto:evylina5@gmail.com" target="blank">
                  <MdOutlineMail className="logos" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/evylina-antao-724262177/"
                  target="blank"
                >
                  <CiLinkedin className="logos" />
                </a>
              </li>
              <li>
                <a href="https://github.com/EvylinaAn" target="blank">
                  <IoLogoGithub className="logos" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/thatfashiontale/"
                  target="blank"
                >
                  <IoLogoInstagram className="logos" />
                </a>
              </li>
            </ul>
            {/* </div> */}
          </div>
          <Divider flexItem className="smallHR">
            Or
          </Divider>
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
              <Toaster
                style={{ background: "green !important", color: "white" }}
              />
            </form>
          </div>
        </div>
        <div className="footerRights">Coded with&nbsp;<HiHeart style={{display:'inline'}} />&nbsp;by Evylina</div>
      </footer>
    </section>
  );
}
