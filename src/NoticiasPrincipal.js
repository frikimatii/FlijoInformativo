import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NoticiaPrincipal } from './NotiPrincipal.js';
import { NotiSecundaria } from './NotiSecundarria.js';

export function ResponsiveExample() {
  return (
    <Container fluid className='mt-5'>
      <Row>
        <Col xs={12} lg={6}>
          <NoticiaPrincipal />
        </Col>
        <Col xs={12} lg={6}>
          <NotiSecundaria />
        </Col>
      </Row>
    </Container>
  );
}
