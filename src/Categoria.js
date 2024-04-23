import Nav from 'react-bootstrap/Nav';

export function AlignmentExample() {
  return (
    <>
      <Nav className="justify-content-center p-4" activeKey="/home" >
        <Nav.Item>
          <Nav.Link href="/home">Negocios</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Educacion</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Entretenimiento</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Politica</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4">Deportes</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-5">Deporte</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-6">Tegnologia</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-7">Turismo</Nav.Link>
        </Nav.Item>
      </Nav>

    </>
  );
}
