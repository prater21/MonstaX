import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"

import { NavLink, Outlet, useLocation } from 'react-router-dom';


const NavMain = () => {
    return <Navbar bg="dark" variant="dark" sticky="top" fixed='bottom' expand="lg">
        <Container>
            <NavLink to="/" className="nav__link">
                <img
                    src={process.env.PUBLIC_URL + "/imgs/logo.png"}
                    width="25"
                    height="40"
                    className="d-inline-block align-top"
                    alt="main logo"
                />
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to="/" className="nav__link">Home</NavLink>
                    <NavLink to="/album" className="nav__link">Album</NavLink>
                    <NavLink to="/shop" className="nav__link">Shop</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default NavMain;