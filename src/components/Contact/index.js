import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function SubmitButton() {
    console.log("This is a console log");
    console.log(name, email, message);
  }
  return (
    <div className="container">
      <form>
        {/*single item*/}
        <div className="singleItem">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="name"
            placeholder="your name..."
          />
        </div>
        {/*end of single item*/}

        {/*single item*/}
        <div className="singleItem">
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            name="lastname"
            className="lastname"
            placeholder="your lastname..."
          />
        </div>
        {/*end of single item*/}
        {/*single item*/}
        <div className="singleItem">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            className="email"
            placeholder="your email..."
          />
        </div>
        {/*end of single item*/}
        {/* single item */}
        <div className="textArea singleItem">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="5"
            placeholder="your message..."
          ></textarea>
        </div>
        {/*end of single item*/}
        <div className="msg">Message has been sent</div>
        <div className="btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
