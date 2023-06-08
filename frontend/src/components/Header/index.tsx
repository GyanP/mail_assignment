import { Container, Nav as BootstrapNav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div>
      <Navbar
        className={`shadow-sm bg-white px-0 py-2`}
        bg="light"
        variant="light"
        expand="md"
      >
      <Container fluid>
        <Navbar.Brand as={Link} to="/" >LG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <BootstrapNav className="ms-auto text-start">
            <BootstrapNav.Link as={Link} to="/" href="#home">Generate Lead</BootstrapNav.Link>
            <BootstrapNav.Link as={Link} to="/list">All Leads</BootstrapNav.Link>
          </BootstrapNav>
        </Navbar.Collapse>
      </Container>

      </Navbar>
    </div>
  );
};

export { Header };