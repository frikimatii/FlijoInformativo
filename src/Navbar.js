import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import img_logo from "./img/Logo-flugoinformativotitulo.png";
import "./navbar.css";

export function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary bg-nav">
      <Container fluid className="d-flex flex-column align-items-center">
        <Navbar.Brand href="#" className="text-center">
          <img
            src={img_logo}
            className="d-inline-block align-top img-logo"
            alt="Fluido Informativo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
