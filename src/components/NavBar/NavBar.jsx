import './NavBar.css'

import CartWidget from "../CardWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="contenedor-nav">
            <Link to='/'>
                <h3 className="titulo">Ahora Relojes</h3>
            </Link>
            <div className="contendor-ele-nav">
                <NavLink to={`/category/tressa`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>tressa</NavLink>
                <NavLink to={`/category/knock out`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>knock out</NavLink>
                <NavLink to={`/category/stone`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>stone</NavLink>
                <CartWidget/>
            </div>
        </nav>
    );
}

export default NavBar