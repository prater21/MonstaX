/**
 *  Layout Component
 */
import { Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { IoCartOutline } from "react-icons/io5"; //cart icon
import NavMain from './NavMain';
import Cart from './Cart';
import "./Layout.css"
import { useSelector } from 'react-redux';

const Layout = () => {
    const [onImg, setOnImg] = useState(false);
    const [showCartIcon, setShowCartIcon] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const location = useLocation();
    const cartItems = useSelector(state => state.cart.items)

    // display cart Icon only shop page
    if (location.pathname === '/shop' && showCartIcon === false) {
        setShowCartIcon(true);
    }
    else if (location.pathname !== '/shop' && showCartIcon === true) {
        setShowCartIcon(false);
    }

    const openCart = () => {
        setShowCart(true);
        document.body.style.overflow = "hidden";
    }
    const closeCart = () => {
        setShowCart(false);
        document.body.style.overflow = "scroll"; 
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
            {showCartIcon && <div className='nav__cart'>
                <IoCartOutline className='nav__cartIcon' onClick={openCart} />
                {cartItems.length !== 0 && <div className='nav__cartBadge'>{cartItems.length}</div>}
            </div>}
            {showCart && <Cart closeCart={closeCart} ></Cart>}

            <div className='body__container'>
                <Outlet />
            </div>
        </div >
    );
}
export default Layout;