import "./Contact.css";
import { JSX } from "react";

function Contact(): JSX.Element {
  return (
    <section id="contact" className="contact-section">
      <h1 className="first-header first-header--center">
        <span>03. </span>Contact Me
      </h1>
      <p className="contact-text">
        If you have any questions or would like to get in touch, feel free to
        reach out!
      </p>
      <form
        className="contact-form"
        action="https://formsubmit.co/dyakovabina@gmail.com"
        method="POST"
      >
        <label className="contact-label" htmlFor="email">
          Your Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="example@example.com"
          required
        />

        <label className="contact-label" htmlFor="message">
          Your Message
        </label>
        <textarea
          id="message"
          placeholder="Write your message here..."
          required
        ></textarea>
        <button className="submit-button" type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
