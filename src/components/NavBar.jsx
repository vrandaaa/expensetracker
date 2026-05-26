import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import { FaBars, FaEdit, FaHome, FaWallet, FaMoneyBillWave } from "react-icons/fa";
import { useState } from 'react';
const NavBar = () => {
    const [showNavBar, setNavBar] = useState(true);
    const [profileImage, setProfileImage] = useState(null);
    function handleImageChange(e) {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file)
            setProfileImage(imageUrl);
        }
    }
    return (
        <div className={showNavBar ? 'NavbarContainer' : 'NavbarContainer collapsed'}>
            <span className='FaBars'><FaBars size={24} onClick={() => { setNavBar(!showNavBar) }} className='bars' /></span>
            <div className='profileSection'>
                <div className='profileImg'>

                    <img
                        src={profileImage || "https://via.placeholder.com/150"}
                        alt=""
                    />
                    <input
                        type="file"
                        id="profileInput"
                        hidden
                        accept='image/*'
                        onChange={handleImageChange}
                    />

                </div>
                <label htmlFor='profileInput'>
                    <FaEdit className='editIcon' size={20} />
                </label>
                <div className='Name'>Vranda Rastogi</div>

            </div>
            <div className='links'>
                <ul>
                    <li>
                        <NavLink to="/home">
                            <FaHome className='navIcon' />
                            {showNavBar && <span>Home</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/income">
                            <FaWallet className='navIcon' />
                            {showNavBar && <span>Income</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/expense">
                            <FaMoneyBillWave className='navIcon' />
                            {showNavBar && <span>Expense</span>}
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='logout'><button>LogOut</button></div>
        </div>
    )
}

export default NavBar;