import "./footer.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineMail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";

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
    <section ref={footerRef} id="footer">
      <footer>
        <div className="footer_title">
          <h4 className="text-xl header_text footer_h4">CONTACT</h4>
        </div>
        {/* <div className="vertical_line h-[250px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div>{" "} */}
        <div className="contact">
          {/* <div className="footer_links_div"> */}
          <ul className="footer_ul">
            <li>
              {/* <a href="mailto:thatfashiontale@gmail.com" target="blank">
                  Email
                </a> */}
              <button
              className="links_tag"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                <MdOutlineMail className="logos" />
                Email
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <div className="inbox_email">
                    <a href="mailto:thatfashiontale@gmail.com" target="blank">
                      Email
                    </a>
                  </div>
                  <div className="form_div">
                    <form ref={form} onSubmit={sendEmail}>
                      <label>Name</label>
                      <input
                        type="text"
                        name="user_name"
                        className="input_box"
                        required
                      />
                      <label>Email</label>
                      <input
                        type="email"
                        name="user_email"
                        className="input_box"
                        required
                      />
                      <label>Message</label>
                      <textarea name="message" className="input_box" required />
                      <input
                        type="submit"
                        value="Send"
                        className="btn btn-outline btn-xs mt-3"
                      />
                    </form>
                  </div>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </li>
            <li>
              <a
                className="links_tag"
                href="https://www.linkedin.com/in/evylina-antao-724262177/"
                target="blank"
              >
                {" "}
                <CiLinkedin className="logos" />
                LinkedIn
              </a>
            </li>
            <li>
              <a 
              className="links_tag" href="https://github.com/EvylinaAn" target="blank">
                <IoLogoGithub className="logos" />
                GitHub
              </a>
            </li>
            <li>
              <a
               className="links_tag" href="https://www.instagram.com/thatfashiontale/"
                target="blank"
              >
                <IoLogoInstagram className="logos" />
                Instagram
              </a>
            </li>
          </ul>
          {/* </div> */}
        </div>
      </footer>
    </section>
  );
}
