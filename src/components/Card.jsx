import React from 'react'
import './Card.css'
import { NavLink } from 'react-router-dom'
const Card = (props) => {
    return (
        <NavLink to={props.path}>
            <div className='dashboardCard'>
                <p className='cardTitle' >{props.title}</p>
                <h2 className='cardAmount'>{props.amount}</h2>
            </div>
        </NavLink>
    )
}

export default Card