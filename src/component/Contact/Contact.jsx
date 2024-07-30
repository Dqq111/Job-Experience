import { useRef } from "react";

import emailjs from "@emailjs/browser";

import "./Contact.css";

import FormInput from "./formInput.jsx";

import linkedIn from "../../assest/linkedin.png";
import gmail from "../../assest/gmail.png";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wxadmfe", "template_j7g93lk", form.current, {
        publicKey: "aIkosBXTPbtfPJsK2",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact">
      <h2>Contact Me. Let's Get in Touch</h2>
      <div className="divider">
        <div className="contact-col">
          <h3>Send me a message</h3>
          <p>
            Feel free to reach out through contact form or find my contact
            information below. Your feedback, questions and suggestions are
            important to me.
          </p>
          <ul>
            <li>
              <img src={linkedIn} alt="linkedIn logo" />
              <a
                href="https://www.linkedin.com/in/august-nguyen-ab691920a/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn: August Nguyen
              </a>
            </li>
            <li>
              <img src={gmail} alt="gmail logo" />
              dnguyen081898@gmail.com
            </li>
          </ul>
        </div>

        <div className="contact-col">
          <form ref={form} onSubmit={sendEmail}>
            <FormInput
              label="Your Name"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <FormInput
              label="Your Email"
              type="email"
              name="email"
              placeholder="Enter your phone number"
            />
            <FormInput
              textBox
              label="Your message"
              name="message"
              placeholder="Enter your message"
            />
            <button type="submit" className="btn submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
