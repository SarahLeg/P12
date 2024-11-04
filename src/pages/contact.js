import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKeyboard, faMouse, faDesktop } from '@fortawesome/free-solid-svg-icons';
import plantIcon from '../assets/icons/small-exotic-plant.svg';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact">
      <h2>Me Contacter</h2>
      
      <form 
        action="mailto:sarah.legrand06@laposte.net" 
        method="POST" 
        encType="text/plain" 
        onSubmit={handleSubmit}>

        <div>
          <label htmlFor="name">Nom</label>
          <input 
            type="text" 
            id="name" 
            name="nom"
            placeholder="Prénom, Nom - enchantée!" 
            required 
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email"
            name='email'
            placeholder="jaitoutcompris@free.fr"
            required 
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea 
            id="message"
            name='message'
            placeholder="Wouah, ce portfolio est super !" 
            required 
          ></textarea>
        </div>

        <button type="submit">Envoyer</button>

      </form>
      
      <div className="contact_icons">
        <FontAwesomeIcon icon={faMouse} className="contact_icons_icon mouse" />
        <FontAwesomeIcon icon={faKeyboard} className="contact_icons_icon keyboard" />
        <FontAwesomeIcon icon={faDesktop} className="contact_icons_icon desktop" />
        <img src={plantIcon} alt="Small exotic plant" className="contact_icons_icon plant" />
        <FontAwesomeIcon icon={faEnvelope} className="contact_icons_icon envelope" />
      </div>

      {submitted && (
        <p className="contact_message">
          Merci pour votre message, je vous répondrai au plus vite
        </p>
      )}
      
    </section>
  );
};

export default Contact;