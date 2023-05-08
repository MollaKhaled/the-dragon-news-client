import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <h4>Login with</h4>
      <Button className='mb-2' variant="primary"><FaGoogle></FaGoogle> Log in with google </Button>
      <Button variant="secondary"><FaGithub></FaGithub> in with Github</Button>
     <div>
      <h4>Find us on</h4>
      <ListGroup>
      <ListGroup.Item><FaFacebook></FaFacebook> FaceBook</ListGroup.Item>
      <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
    </ListGroup>
     </div>
     <QZone></QZone>
     <div>
      <img src={bg} alt="" />
     </div>
    </div>
  );
};

export default RightNav;