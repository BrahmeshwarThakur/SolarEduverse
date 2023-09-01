import "./FormStyles.css";
import axios from "axios";

import React from "react";
import { useState } from "react";

// adding 4 states.
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMessage] = useState("");

  // on clicking the button it'll call the endpoints.
  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/db/store", {
        name,
        email,
        subject,
        msg,
      });
      alert("Thanks for contacting. Our team will reach out to you soon!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form">
      <form onSubmit={onsubmit}>
        <label>Your Name</label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label> Email</label>
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label> Subject</label>
        <input
          type="text"
          onChange={(e) => {
            setSubject(e.target.value);
          }}
        />
        <input
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="Type Your message here"
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
