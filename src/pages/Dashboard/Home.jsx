import React from 'react'
import NavBar from '../../components/NavBar'
import './Home.css'
import Card from '../../components/Card'
import TransactionForm from '../../components/TransactionForm'
import ActionCard from '../../components/ActionCard'
import { useState } from 'react'
import TransactionCard from '../../components/TransactionCard'

const Home = () => {
  const [showForm, setShowForm] = useState(false)
  function addTransactionHandler() {
    setShowForm(prev => !prev)
  }
  return (
    <div className='homeContainer'>
      <NavBar />
      <div className='contentSide'>
        <p>Welcome back , <span className='userName'>Vranda!</span></p>
        <div className='cardsContainer'>
          <Card title="Total Balance" amount={1200} path="/home" />
          <Card title="Expense" amount={2200} path="/expense" />
          <Card title="Income" amount={3200} path="/income" />
          <Card title="Savings" amount={1700} path="/savings" />
        </div>
        <div>
          <ActionCard
          title="Track your finances"
          subtitle="Add and manage your transactions easily"
          btnText="+ Add Transaction"
          onClick={addTransactionHandler}
          />
          {showForm && <TransactionForm />}
        </div>
        <TransactionCard title={'Recent Transaction'}/>
      </div>
      
    </div>
  )
}

export default Home