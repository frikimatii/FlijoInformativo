import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavScrollExample } from "./Navbar.js";
import { AlignmentExample } from './Categoria.js';


function ContainerExample() {
  return (
    <Container fluid>
      <Row>
        <Col>
            <NavScrollExample/>
            <AlignmentExample/>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;