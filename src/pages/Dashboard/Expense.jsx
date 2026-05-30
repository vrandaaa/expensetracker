import React from 'react'
import NavBar from '../../components/NavBar'
import { useState ,useContext} from 'react'
import ActionCard from '../../components/ActionCard'
import TransactionForm from '../../components/TransactionForm'
import TransactionCard from '../../components/TransactionCard'
import { TransactionContext } from '../../Context/TransactionContext'
import './Expense.css'

const Expense = () => {
  const [showForm, setShowForm] = useState(false)
  function addTransactionHandler() {
    setShowForm(prev => !prev)
  }
  const {transactions} = useContext(TransactionContext);
  const expenseTransacions = transactions.filter(item => item.type === 'Expense');
   
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
        <TransactionCard title={'Recent Expenses'} data={expenseTransacions} />

      </div>
    </div>
  )
}

export default Expense