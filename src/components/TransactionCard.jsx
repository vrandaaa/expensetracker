import React from 'react'
import './TransactionCard.css'
import TransactionRecords from './TransactionRecords'

const TransactionCard = (props) => {
  // console.log(data)

  return (
    <div className='card'>
      <div className='heading'>
        <p>{props.title}</p>
        <button>See All</button>
      </div>
      {
        props.data.length === 0 ? (
          <div className='empty'>
            <p>No transactions yet</p>
          </div>
        ) : (
          props.data.map((i) => (
            <TransactionRecords
              key={i.id}
              title={i.title}
              amount={i.amount}
              icon={i.icon}
              date={i.date}
              type={i.type}
              category={i.category}
            />
          ))
        )
      }


    </div>
  )
}

export default TransactionCard