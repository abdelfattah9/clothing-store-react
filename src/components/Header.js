import { Link } from "react-router-dom";
import './css/header.css'
import {ReactComponent as Logo } from '../assets/crown.svg'


const Header = () => {
    return (
        <div className='header'>
            <Link to="/" className='logo-container'>
                <Logo className='logo' />
            </Link>

            <Link className='options' to='/shop'>SHOP</Link>
            <Link className='options' to='/shop'>contact</Link>
        </div>
    )
}

export default Header
