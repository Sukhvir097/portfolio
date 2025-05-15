import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import { motion } from 'framer-motion';

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data using emailjs
    emailjs.sendForm(
      'service_7j3m7jg',    // Replace with your Service ID
      'template_22j5edo',   // Replace with your Template ID
      formRef.current,       // The form reference
      '8IPdfRhzE6y3zpT0R'   // Replace with your Public Key
    )
      .then((response) => {
        alert('Message sent successfully!');
        console.log('SUCCESS!', response.status, response.text);
        formRef.current.reset();  // Clear the form after submission
      })
      .catch((err) => {
        alert('Failed to send message. Please try again.');
        console.error('FAILED...', err);
      });
  };

  return (
    <section className="bg-light py-5 my-5">
      <div className="container">
        <motion.h2
          className="mb-4 text-3xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
