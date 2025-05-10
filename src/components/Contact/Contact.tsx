import "./Contact.css";
import { JSX } from "react";


function Contact(): JSX.Element {
  return (
    <div className="contact-container">
  
      <h2 className="contact-title">  <span>03. </span>Contact Me</h2>
      <p className="contact-text">If you have any questions or would like to get in touch, feel free to reach out!</p>
      <form className="contact-form" action="https://formsubmit.co/dyakovabina@gmail.com" method="POST">
     {/* Email Field */}
     <label className="contact-label" htmlFor="email">Your Email</label>
      <input id="email" type="email" placeholder="example@example.com" required />

      {/* Message Field */}
      <label className="contact-label" htmlFor="message">Your Message</label>
      <textarea id="message" placeholder="Write your message here..." required></textarea>
        <button className="submit-button" type="submit">Send Message</button> 
      </form>
   
    </div>
  );
}

export default Contact;