

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




function Header() {
  return (
   
    <Navbar className="navnar-dark" variant="dark" expand="lg" fixed="top">
      <Container >
       
        <Navbar.Brand className= 'me-2 me-xl-4' href="#home"   >
            <img
              alt=""
              src="./Assets/Images/carfinder-logo.svg"
              width="116"
              height="32"
              className="d-inline-block align-top"
            />{' '}
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav " className= "toggle-btn "  />
        
        
        <button type="button" className="btn btn-link btn-light btn-sm d-none d-sm-none d-lg-block order-lg-3 btn-sm">
        
        <i class=" fa fa-light fa-user"></i>
        Sign in</button>
       
        <button type="button" class=" sell-car order-lg-3 ms-2 btn btn-primary btn-small">
        <i class=" fa fa-regular fa-plus"></i>Sell Car</button>

        


        <Navbar.Collapse id="basic-navbar-nav" className="order-lg-2 nav-bar">
          <Nav className="me-auto">
          <i class="fa fa-regular fa-layer-group"></i>
          <NavDropdown title="Demos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
             
            </NavDropdown>
           
            &nbsp; 
            <span class=" line d-none d-lg-block position-absolute top-50 translate-middle-y border-end border-light"></span>
            &nbsp;  
            <Nav.Link href="#home"  >Home</Nav.Link>
            
            <NavDropdown title="Catalog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Vendor" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;