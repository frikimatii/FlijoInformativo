import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import img_logo from "./img/Logo-flugoinformativotitulo.png";
import './navbar.css'

export function NavScrollExample() {
  return (
    <Navbar className="bg-body-tertiary bg-nav">
      <Container fluid>
        <img
          src={img_logo}
          className="d-inline-block align-top mx-auto "
          alt="Fluido Informativo"
        />
      </Container>
    </Navbar>
  );
}
