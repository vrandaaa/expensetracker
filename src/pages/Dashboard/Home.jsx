import React from 'react'
import NavBar from '../../components/NavBar'
import './Home.css'
import Card from '../../components/Card'
import TransactionForm from '../../components/TransactionForm'
import ActionCard from '../../components/ActionCard'
import { useState, useEffect ,useContext} from 'react'
import TransactionCard from '../../components/TransactionCard'
import { TransactionContext } from '../../Context/TransactionContext'
import { useFinanceStats } from '../../hooks/useFinanceStats';


const Home = () => {
  const [showForm, setShowForm] = useState(false)
  const { transactions } = useContext(TransactionContext);
  function addTransactionHandler() {
    setShowForm(prev => !prev)
  }
  const {incomeAmount,expenseAmount,balance,savings} = useFinanceStats();
 
  return (
    <div className='homeContainer'>
      <NavBar />
      <div className='contentSide'>
        <p>Welcome back , <span className='userName'>Vranda!</span></p>
        <div className='cardsContainer'>
          <Card title="Total Balance" amount={balance} path="/home" />
          <Card title="Expense" amount={expenseAmount} path="/expense" />
          <Card title="Income" amount={incomeAmount} path="/income" />
          <Card title="Savings" amount={savings} path="/savings" />
        </div>
        <div>
          <ActionCard
            title="Track your finances"
            subtitle="Add and manage your transactions easily"
            btnText="+ Add Transaction"
            onClick={addTransactionHandler}
          />
          {showForm && <TransactionForm/>}
        </div>
        <TransactionCard title={'Recent Transaction'} data={transactions} />
      </div>

    </div>
  )
}

export default Home