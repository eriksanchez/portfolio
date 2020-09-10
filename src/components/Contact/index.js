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
    <div>
      <form>
        {/*single item*/}
        <div className="singleItem">
          <label htmlFor="name">name</label>
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
          <label htmlFor="lastname">lastname</label>
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
          <label htmlFor="email">email</label>
          <input
            type="text"
            name="name"
            className="name"
            placeholder="your name..."
          />
        </div>
        {/*end of single item*/}
      </form>
    </div>
  );
}

export default Contact;
