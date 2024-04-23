import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CardCategoria } from './CardCategoria';

export function InfoCateogoria() {
  return (
    <Container fluid >
      <Row className='m-3'>
        <Col>
        <CardCategoria/>
        </Col>
        <Col>
        <CardCategoria/>
        </Col>
        <Col>
        <CardCategoria/>
        </Col>
        <Col>
        <CardCategoria/>
        </Col>
      </Row>
    </Container>
  );
}
