import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import "./Layout.css"
import { useState } from 'react';

const Layout = () => {
    const [onImg, setOnImg] = useState(false);
    const location = useLocation();

    if (location.pathname === '/' && onImg === false) {
        setOnImg(true);
    }
    else if (location.pathname !== '/' && onImg === true) {
        setOnImg(false);
    }
    return (
        <div className='body'>
            {onImg &&
                // <swiper-container>
                //     <swiper-slide>
                //         <img src="/imgs/home.jpeg" alt='' />
                //     </swiper-slide>
                //     <swiper-slide>
                //         <img src="/imgs/home.jpeg" alt='' />
                //     </swiper-slide>

                // </swiper-container>
                < div className="body__img">
                    <img src="./imgs/home.jpeg" alt='' />
                </div>
            }
            <Navbar bg="dark" variant="dark" sticky="top" fixed='bottom' expand="lg">
                <Container>
                    <NavLink to="/" className="nav__link">
                        <img
                            src="imgs/logo.png"
                            width="32"
                            height="52"
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
            <div className='body__container'>
                <Outlet />
            </div>
            {/* <Navbar bg="dark" variant="dark" fixed='bottom' expand="lg">
                <Container>

                </Container>
            </Navbar> */}
        </div >
    );
}
export default Layout;