import React from 'react'
import { useState } from 'react'
import NavBar from '../../components/NavBar'
import ActionCard from '../../components/ActionCard'
import TransactionForm from '../../components/TransactionForm'
import './Income.css'
const Income = () => {
  const [showForm, setShowForm] = useState(false)
    function addTransactionHandler() {
      setShowForm(prev => !prev)
    }
  return (
    <div className='incomeConatiner'>
      <NavBar />
      <div className='contentSide'>
        <ActionCard
          title="Manage Income"
          subtitle="Add salary, freelance and other earnings"
          btnText="+ Add Income"
          onClick={addTransactionHandler}
        />
        {showForm && <TransactionForm fixedType="Income" />}
      </div>
    </div>
  )
}

export default Income