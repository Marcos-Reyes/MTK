import Container from "react-bootstrap/Container";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget";

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <NavLink to={`/`}>Tienda Nike</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to={"/"}>
              Inicio
            </NavLink>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink to={`/categoria/Oscuras`}>Oscuras</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to={`/categoria/Blancas`}>Blancas</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to={`/categoria/Otros`}>Otros</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#cart">
              <CartWidget numberProducts={2} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
