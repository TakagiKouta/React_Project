import React from 'react'

const IncomeExpense = ({incomeTotal,expenseItems}) => {

  const expenseAmount = expenseItems.map(expenseItem => expenseItem.amount);

  const expenseTotal = expenseAmount.reduce((acc,cur) => acc += cur, 0);

  const percentage = () => {
    console.log(incomeTotal)
    console.log(expenseTotal)
    if(incomeTotal >= 1) {
      // return (expenseTotal / incomeTotal * 100) ;
      return `${Math.round((expenseTotal / incomeTotal) * 100)} %`;


      // return `${Math.round(expenseTotal / incomeTotal) * 100} % `
    }
  }

  return (
    <div className="inc-exp-container">
      <div className="inc-container">
        <h2>収入</h2>
        <div className="right">
          <p className="income-total">+ {incomeTotal}<span> 円</span></p>
      </div>
        </div>
      <div className="exp-container">
        <h2>支出</h2>
        <div className="right">
          <p className="expense-total">-{expenseTotal} <span> 円</span></p>
          <div className="totalPercentage">{percentage()}</div>
        </div>
      </div>
  </div>
  )
}

export default IncomeExpense