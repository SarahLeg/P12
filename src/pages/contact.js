// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section className='contact'>
      <h2 id='contact'>Me Contacter</h2>
      <form action="mailto:ton-email@example.com" method="POST" encType="text/plain">
        <div>
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;