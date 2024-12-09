"use client";
import { sendEmail } from "@/utils/send-email";
import Heading from "../Heading/Heading";
import styles from "./contactForm.module.css";
import React from "react";

const ContactForm = () => {
  const id = React.useId();
  const nameId = id + "name";
  const emailId = id + "email";
  const messageId = id + "message";

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    const jsonData = {
      name,
      email,
      message,
    };
    sendEmail(jsonData);
  };

  return (
    <div className={styles.card}>
      <Heading HeadingTag="h2">Send Me A Message</Heading>
      <form className={styles.form} onSubmit={submitHandler}>
        <label htmlFor={nameId}>Name:</label>
        <input
          id={nameId}
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          aria-label="Your Name"
          required
        />

        <label htmlFor={emailId}>Email:</label>
        <input
          id={emailId}
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Your Email"
          required
        />

        <label htmlFor={messageId}>Message:</label>
        <textarea
          id={messageId}
          value={message}
          name="message"
          maxLength={300}
          draggable={false}
          onChange={(e) => setMessage(e.target.value)}
          aria-label="Your Message"
          required
        />
        <p>Characters left: {300 - message.length}</p>

        <button type="submit" className={styles.btn}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
