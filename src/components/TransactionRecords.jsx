import React, { useState, useContext } from 'react'
import './TransactionRecords.css'
import { FaArrowTrendUp, FaArrowTrendDown, FaTrash } from "react-icons/fa6";
import { TransactionContext } from '../Context/TransactionContext';
import DeleteConfirmation from './DeleteConfirmation';


const TransactionRecords = (props) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const { setTransactions } = useContext(TransactionContext)

    function deleteHandler() {
        setTransactions(prev => prev.filter(item => item.id !== props.id));
        setShowDeleteModal(false);
    }
    return (
        <div>
            <div className='transactionData'>
                <div><div className='icon'>{props.icon}</div></div>
                <div className='details'>
                    <div className='titleDate'>
                        <span>{props.title}</span>
                        <span>{props.date}</span>
                    </div>
                    <div className={`amount ${props.type === "Income" ? "income" : "expense"}`}><span>{props.type === 'Income' ? <FaArrowTrendUp /> : <FaArrowTrendDown />}</span><span>₹{props.amount}</span></div>
                    <div className='delete' onClick={() => setShowDeleteModal(true)}><FaTrash /></div>
                    <DeleteConfirmation
                        isOpen={showDeleteModal}
                        onClose={() => setShowDeleteModal(false)}
                        onConfirm={deleteHandler}
                    />
                </div>
            </div>
        </div>
    )
}

export default TransactionRecords