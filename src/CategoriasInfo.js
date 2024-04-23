import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export function CategoriaInfo() {
  return (
    <Container className='mb-1'>
      <Navbar expand="lg" className="bg-body-tertiary bg-nav ">
          <Navbar.Brand className='text-white fw-bold m-2' href="#">Deportes</Navbar.Brand>
      </Navbar>
    </Container>
  );
}