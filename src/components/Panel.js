import React, { useRef } from 'react';
import Navigation from './Navigation';
import Button from './Button';
import PhotoBox from './Photobox';
import { Link } from 'react-router-dom';
import profile from "../assets/images/profile.jpg"
function Panel() {

  return (
    <div className='panel'>
      <nav>
        <PhotoBox
          name="nimo"
          avatar={profile}
        />
      </nav>
      <Navigation />
      <Link to="/">
        <Button color='white' textColor='black' text={"Go Back"} />
      </Link>
    </div>
  );
}

export default Panel;
