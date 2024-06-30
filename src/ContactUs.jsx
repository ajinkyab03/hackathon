import React from 'react';

const ContactUs = ({ setShowContactForm }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowContactForm(false);
  };

  const handleDoubleClick = () => {
    setShowContactForm(false);
  };

  return (
    <section onDoubleClick={handleDoubleClick}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactUs;
