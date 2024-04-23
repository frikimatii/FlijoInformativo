import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
  return (
    <Navbar bg="dark" variant="dark" className="justify-content-center flex-column">
      <Navbar.Brand href="#home" className="text-center">
        Flujo Informativo
      </Navbar.Brand>
      
      <div className="social-icons text-center">
        <a href="https://twitter.com/flujoinformativ" target="https://twitter.com/flujoinformativ" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="lg" className="text-white mr-3 m-2" />
        </a>
        <a href="ff" target="" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="lg" className="text-white mr-3 m-2" />
        </a>
        <a href="ff" target="" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="lg" className="text-white mr-3 m-2" />
        </a>
      </div>
      <Navbar.Text className="text-white mt-3 text-center">
        Síguenos en nuestras redes sociales
      </Navbar.Text>
    </Navbar>
  );
}

