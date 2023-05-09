import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div>
      <h2>Terms and conditions</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus dolorem rerum eveniet quas dolor, corrupti voluptates ipsum eaque aperiam porro magni reprehenderit accusantium cupiditate veniam. Adipisci harum similique mollitia dolorem?</p>
      <p>Go back to <Link to="/register">Register</Link>   </p>
    </div>
  );
};

export default Terms;