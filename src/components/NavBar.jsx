import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import { FaBars, FaEdit } from "react-icons/fa";
import { useState } from 'react';
const NavBar = () => {
    const [showNavBar, setNavBar] = useState(true);
    const[profileImage,setProfileImage] = useState(null);
    function handleImageChange(e){
        const file = e.target.files[0];
        if(file){
            const imageUrl = URL.createObjectURL(file)
            setProfileImage(imageUrl);
        }
    }
    return (
        <div className='wrapper'>
            <div className={showNavBar ? 'NavbarContainer' : 'hide'}>
                <div className='profileSection'>
                    <div className='profileImg'>

                        <img
                            src={profileImage || "https://via.placeholder.com/150"}
                            alt="no image"
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
                            <FaEdit className='editIcon' size={20}/>
                    </label>                    
                    <div className='Name'>Vranda Rastogi</div>
                     
                </div>
                <div className='links'>
                    <ul>
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/income">Income</NavLink></li>
                        <li><NavLink to="/expense">Expense</NavLink></li>
                    </ul>
                </div>
                <div className='logout'><button>LogOut</button></div>
            </div>
            <div className='FaBars' onClick={() => { setNavBar(!showNavBar) }} ><FaBars size={24} /></div>
        </div>
    )
}

export default NavBar;