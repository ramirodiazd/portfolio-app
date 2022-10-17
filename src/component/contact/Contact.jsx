import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_pt8jkjs",
      "template_05g4pbl",
      form.current,
      "wn7lJOZG1fg5bwm2X"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>ramirodiaznu@gmail.com</h5>
            <a
              href="mailto:ramirodiaznu@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>RamiroDiazDev</h5>
            <a href="https://m.me/RamiDiazD" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <RiWhatsappLine className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>+5492996266089</h5>
            <a href="https://walink.co/5a8ed3" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            tpye="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input tpye="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
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
