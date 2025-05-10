import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';

export default function MyNavbar() {
  return (
    <div>
      {/* Navbar Desktop */}
      <Navbar className='d-none d-lg-flex' collapseOnSelect expand="lg" bg='transparent' style={{ zIndex: 1, paddingTop: '2rem' }}>
        <Container>
          <Navbar.Brand href="/" style={{ fontSize: '2rem', color: 'white', fontWeight: 'bold' }}>
            FR
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="gap-5">
              <Link href="/" onClick={() => window.location.href = "/"} passHref style={{textDecoration: 'none'}} >
                <Nav.Link style={{ fontSize: '1.3rem', color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
                  Beranda
                </Nav.Link>
              </Link>

              <Link href="/post" onClick={() => window.location.href = "/post"} passHref style={{textDecoration: 'none'}} >
                <Nav.Link style={{ fontSize: '1.3rem', color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
                  Postingan
                </Nav.Link>
              </Link>

              <Link href="/about" onClick={() => window.location.href = "/about"} passHref style={{textDecoration: 'none'}} >
                <Nav.Link style={{ fontSize: '1.3rem', color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
                  Tentang Saya
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Navbar Mobile */}
      <Navbar className='d-flex d-lg-none' expand="lg" bg="dark" collapseOnSelect data-bs-theme="dark" style={{ zIndex: 1 }}>
        <Container>
          <Navbar.Brand href="#home">FLOZISTOR</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="me-auto">
              <Nav.Link href="/">Beranda</Nav.Link>
              <Nav.Link href="/post">Postingan</Nav.Link>
              <Nav.Link href="/about">Tentang Saya</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}