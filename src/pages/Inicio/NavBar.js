import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import Cart from '../../images/cart.png';

function NavBarInicio() {
    return (
        <div className='container'>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">LOGO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Criar Conta</Nav.Link>
                            <Nav.Link href="#action2">Entrar</Nav.Link>
                            <Nav.Link href="#action2"><img
                                src={Cart}
                                width="20"
                                height="20" /></Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBarInicio;