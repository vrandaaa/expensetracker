import React from 'react'
import './TransactionCard.css'
import TransactionRecords from './TransactionRecords'

const TransactionCard = (props) => {
    
  return (
    <div className='card'>
      <div className='heading'>
        <p>{props.title}</p>
        <button>See All</button>
      </div>
      <TransactionRecords/>
    </div>
  )
}

export default TransactionCard