import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavScrollExample } from "./Navbar.js";
import { WeatherAndBitcoin} from "./Bitcoin-temp.js";

function ContainerExample() {
  return (
    <Container fluid className="w-100"> {/* Agrega la clase w-100 al Container para que ocupe todo el ancho */}
      <Row className="justify-content-center" style={{background: "#EFB822 ", borderBottom: "#000000 3px solid"}}>
        <Col xs={12} className="text-center ">
          <NavScrollExample/>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} className="text-center">
        <WeatherAndBitcoin />
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;
