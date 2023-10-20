import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Outlet} from 'react-router-dom';

function NavScrollExample() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle  />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            
          >
            <Nav.Link href="#action"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTwKVLWYWaXxk3FiSdvqmWmdLKkVIklTsj38Ja20wprVYqssuXZhNPkYl-j9Ltlc_B-Hg&usqp=CAU" alt=""  style={{height:40,width:70}}/></Nav.Link>
            
           <Link to={'/home'}><Nav.Link href="#home" >HOME</Nav.Link></Link>
            <Link to={'/location'}><Nav.Link href="#location">LOCATION</Nav.Link></Link>
            <Link to={'/contact'}><Nav.Link href="#contact">CONTACT</Nav.Link></Link>
            <Link to={'/about'}>
            <Nav.Link href="#about" >
              ABOUT
            </Nav.Link>
            </Link>
          </Nav>
          <Form className="d-flex">
           
            <Button variant="outline-success" style={{backgroundColor:"red",color:"white"}}>login</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </>
    
  );
}

export default NavScrollExample;