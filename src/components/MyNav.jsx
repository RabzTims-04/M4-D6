import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const MyNav = (props) =>(
    <Navbar collapseOnSelect expand="lg"  variant="dark">
      <Navbar.Brand className="nav-title" href="#home">{props.brand}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#pricing">Home</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
          <Nav.Link href="#pricing">Browse</Nav.Link>
          <NavDropdown title="New Arrivals" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Fantasy</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Horror</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Scifi</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">History</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Romance</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Blogs</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
</Navbar>
)
export default MyNav