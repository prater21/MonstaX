import { NavLink, Outlet, useLocation } from 'react-router-dom';
import "./Layout.css"
import { useState } from 'react';
import NavMain from './Navbar';

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
                < div className="body__img">
                    <img src={process.env.PUBLIC_URL + "/imgs/home.jpeg"} alt='' />
                </div>
            }
            <NavMain />
            <div className='body__container'>
                <Outlet />
            </div>
        </div >
    );
}
export default Layout;