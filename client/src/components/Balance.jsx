import React from 'react'

const Balance = ({incomeTotal,expenseItems}) => {

  const blanca = () => {

    const expenseAmount = expenseItems.map(expenseItem => expenseItem.amount);
    const expenseTotal = expenseAmount.reduce((acc,cur) => acc += cur, 0);

    return incomeTotal - expenseTotal
    
  }

  return (
    <div className="balance-container">
      <h2>残高</h2>
      <div className="balance">{blanca()}<span > 円</span></div>
    </div>
  )
}

export default Balance