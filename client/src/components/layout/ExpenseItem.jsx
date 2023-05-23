import React from 'react'

const ExpenseItem = ({expenseText,expenseAmount,expenseItem,id,deleteExpense}) => {

  const handleDelete = () => {

    alert("expenseDleteメソッド")
    deleteExpense(id)
  }
  return (
    <li className="thisMonthList" key={id}>
      <div>{expenseText}</div>
      <div className="money-minus">+{Number(expenseAmount).toLocaleString()}円</div>
      <button className="delete-btn" onClick={() => handleDelete(id)}>×</button>
    </li>
  )
}

export default ExpenseItem