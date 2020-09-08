import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <form className="form">
        <h1>Contact form</h1>

        <label>Name</label>
        <input placeholder="name" />

        <label>Email</label>
        <input placeholder="Email" />

        <label>Message</label>
        <textarea placeholder="Message"> </textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
