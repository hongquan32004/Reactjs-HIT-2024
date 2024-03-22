import { useState } from 'react';
import './Menu.scss'
const Menu = () => {
    const [toggle, setToggle] = useState(false);
    const ToggleChange = () => {
        setToggle(!toggle);
    }
    return (
        <div className='menu'>
            <div className="menu-content">
                <div className="menu-img">
                    <img src="https://hit-reactjs-2024.vercel.app/assets/logo-B5ukk7LZ.png" alt="" />
                </div>
                <div className="menu-list">
                    <a href="">Home</a>
                    <a className='outstanding' href="">Users</a>
                    <a href="">Blogs</a>
                    <a href="">Service</a>
                    <a href="">Contact</a>
                </div>
                <div className='toggle-container' onClick={ToggleChange}>
                    <div className={`toggle-btn ${!toggle ? "disable" : ''}`}></div>
                </div>
            </div>

        </div>
    )
}
export default Menu;