import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";

function Contact() {
  const [name, setName] = useState();
  const [lastname, setLastName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [sent, setSent] = useState();

  function handleName(e) {
    setName(e.target.value);
  }

  function handleLastname(e) {
    setLastName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleMessage(e) {
    setMessage(e.target.value);
  }

  function resetForm() {
    setName("");
    setLastName("");
    setEmail("");
    setMessage("");
  }

  setTimeout(() => {
    setSent(false);
  }, 3000);

  function formSubmit(e) {
    e.preventDefault();
    let data = {
      name: name,
      lastname: lastname,
      email: email,
      message: message,
    };

    axios
      .post("/api/form", data)
      .then((res) => {
        setSent(true);
        resetForm();
      })
      .catch(() => {
        console.log("Message not sent");
      });
  }
  return (
    <div className="container">
      <h1>Contact Me</h1>
      <form>
        {/*single item*/}
        <div className="singleItem">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="name"
            placeholder="your name..."
            value={name}
            onChange={handleName}
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
            value={lastname}
            onChange={handleLastname}
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
            value={email}
            onChange={handleEmail}
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
            value={message}
            onChange={handleMessage}
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
