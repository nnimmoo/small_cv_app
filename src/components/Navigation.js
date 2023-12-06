import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faUser,faBriefcase,faPen ,faAddressCard,faComment,faBrain} from '@fortawesome/free-solid-svg-icons';

import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';
function Navigation() {
  const navigationItems = [
    { label: 'About me', sectionId: 'about', icon: <FontAwesomeIcon icon={faUser} style={{color: '#ffffff',}} /> },
    { label: 'Education', sectionId: 'education', icon: <FontAwesomeIcon icon={faUserGraduate} />},
    { label: 'Skills', sectionId: 'skills', icon: <FontAwesomeIcon icon={faBrain} /> },
    { label: 'Experience', sectionId: 'experience', icon:<FontAwesomeIcon icon={faPen} />},
    { label: 'Portfolio', sectionId: 'portfolio', icon:<FontAwesomeIcon icon={faBriefcase} />},
    { label: 'Contacts', sectionId: 'contacts', icon: <FontAwesomeIcon icon={faAddressCard} />},
    { label: 'Feedback', sectionId: 'feedback', icon:<FontAwesomeIcon icon={faComment} /> }
   
  ];

  return (
    <div className="navigation">
      <ul>
        {navigationItems.map((item, index) => (
          <li key={index} className="navigation-item" data-testid="navigation-item">
            {item.icon}
            <Link activeClass="active" smooth spy to={item.sectionId}>
              <p>{item.label}</p>
            </Link>
          </li>
        ))}

      
   
      </ul>
    </div>
  );
}

export default Navigation;
