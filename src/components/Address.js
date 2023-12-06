import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { faPhone } from '@fortawesome/free-solid-svg-icons';
function Address() {
    const contactInfo = {
        instagram: 'https://www.instagram.com/nnimmoo',
        github: 'https://github.com/nnimmoo',
        email: 'ninoguadze@gmail.com',
        phone: '+995 551 12 56 03',
    };
    const handleEmailClick = () => {
        const emailUri = `mailto:${contactInfo.email}`;
        window.location.href = emailUri;
    };

    const handlePhoneClick = () => {
        const phoneUri = `tel:${contactInfo.phone}`;
        window.location.href = phoneUri;
    };

    return (
        <div className="address">
            <h1 id="contacts">Contacts</h1>
            <div className="contact-info">
                <p><FontAwesomeIcon icon={faEnvelope} /> Email: <a href="#" onClick={handleEmailClick}> {contactInfo.email}</a></p>
                <p><FontAwesomeIcon icon={faPhone} /> Phone: <a href="#" onClick={handlePhoneClick}> {contactInfo.phone}</a></p>
                <p><FontAwesomeIcon icon={faInstagram} /> Instagram: <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer"> {contactInfo.instagram}</a></p>
                <p><FontAwesomeIcon icon={faGithub} /> Github: <a href={contactInfo.github} target="_blank" rel="noopener noreferrer"> {contactInfo.github}</a></p>
            </div>
        </div>
    );
};

export default Address;
