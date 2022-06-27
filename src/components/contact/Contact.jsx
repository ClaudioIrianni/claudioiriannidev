import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xov16kv",
        "template_olm0piu",
        form.current,
        "QnJVhhF7acwtz4BF5"
      )
    
    e.target.reset()
  };
  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>irianniclaudio@gmail.com</h5>
            <a href="mailto:irianniclaudio@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <AiFillLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Claudio Alexis Irianni</h5>
            <a
              href="https://www.linkedin.com/in/claudio-alexis-irianni/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Me
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=5491124814559"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/*END OF CONTACT OPTION*/}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
