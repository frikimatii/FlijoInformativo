import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NoticiaPrincipal } from './NotiPrincipal';
import { NotiSecundaria } from './NotiSecundarria';


export function ResponsiveExample() {



  return (
<Container fluid>
  <Row>
    <Col xs={12} md={12} lg={6}>
      <NoticiaPrincipal/>
    </Col>
    <Col xs={10} md={8} lg={6} className='justify-content-center'> 
      <NotiSecundaria/>

    </Col>
  </Row>
</Container>
  );
}
