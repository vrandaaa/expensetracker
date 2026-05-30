import React, { useState } from 'react'
import './TransactionRecords.css'
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
const TransactionRecords = (props) => {
    return (
        <div>
            <div className='transactionData'>
                <div><div className='icon'>{props.icon}</div></div>
                <div className='details'>
                    <div className='titleDate'>
                        <span>{props.title}</span>
                        <span>{props.date}</span>
                    </div>
                    <div className={`amount ${props.type === "Income" ? "income" : "expense"}`}><span>{props.type === 'Income'? <FaArrowTrendUp /> : <FaArrowTrendDown />}</span><span>₹{props.amount}</span></div>
                </div>
            </div>
        </div>
    )
}

export default TransactionRecords