import { Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { IoCartOutline } from "react-icons/io5"; //cart icon
import NavMain from './Navbar';
import Cart from './Cart';
import "./Layout.css"

const Layout = () => {
    const [onImg, setOnImg] = useState(false);
    const [showCartIcon, setShowCartIcon] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const location = useLocation();

    // display cart Icon only shop page
    if (location.pathname === '/shop' && showCartIcon === false) {
        setShowCartIcon(true);
    }
    else if (location.pathname !== '/shop' && showCartIcon === true) {
        setShowCartIcon(false);
    }

    // close cart
    const closeCart = () => {
        setShowCart(false);
    }

    // display image only index(home) page
    if (location.pathname === '/' && onImg === false) {
        setOnImg(true);
    }
    else if (location.pathname !== '/' && onImg === true) {
        setOnImg(false);
    }

    return (
        <div className='body'>
            {onImg &&
                < div className="body__img">
                    <img src={process.env.PUBLIC_URL + "/imgs/home.jpeg"} alt='' />
                </div>
            }

            <NavMain />
            {showCartIcon && <IoCartOutline className='nav__cartIcon' onClick={() => { setShowCart(true) }}></IoCartOutline>}
            {showCart && <Cart closeCart={closeCart} ></Cart>}

            <div className='body__container'>
                <Outlet />
            </div>
        </div >
    );
}
export default Layout;