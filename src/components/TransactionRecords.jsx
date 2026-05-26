import React from 'react'
import './TransactionRecords.css'

const TransactionRecords = () => {
  return (
    <div>
        <div className='transactionData'>
        <div><div className='icon'>icon</div></div>
        <div className='details'>
          <div className='titleDate'>
            <span>title</span>
            <span>date</span>
          </div>
          <div className='amount'><span>amount</span></div>
        </div>
      </div>
    </div>
  )
}

export default TransactionRecords