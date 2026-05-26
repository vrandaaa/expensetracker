import React from 'react'
import NavBar from '../../components/NavBar'
import { useState } from 'react'
import ActionCard from '../../components/ActionCard'
import TransactionForm from '../../components/TransactionForm'
import './Expense.css'

const Expense = () => {
  const [showForm, setShowForm] = useState(false)
  function addTransactionHandler() {
    setShowForm(prev => !prev)
  }
  return (
    <div className='expenseConatiner'>
      <NavBar />
      <div className='contentSide'>
        <ActionCard
          title="Manage Expenses"
          subtitle="Track spending and control your budget"
          btnText="+ Add Expense"
          onClick={addTransactionHandler}
        />

        {showForm && <TransactionForm fixedType="Expense" />}
      </div>
    </div>
  )
}

export default Expense