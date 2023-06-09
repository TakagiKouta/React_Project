import React from 'react'
import IncomeItem from './layout/IncomeItem'
import ExpenseItem
 from './layout/ExpenseItem'
const ItemsList = ({incomeItems,expenseItems,deleteIncome,deleteExpense}) => {
  return (
    <div className="list-container">
      <div className="income-list">
        <h3>収入一覧</h3>
          <ul className="list">
            {/* {incomeItems.map((incomeItem) => (
              <IncomeItem 
                deleteIncome={deleteIncome}
                incomeText={incomeItem.text}
                incomeAmount={incomeItem.amount}
                incomeItem={incomeItem}
                key={incomeItem.docId}
                selectedMonth={selectedMonth}
                thisMonth={thisMonth}
              />
            ))} */}

            {incomeItems.map((incomeItem,index) => (
            
                <IncomeItem 
                incomeText={incomeItem.text}
                incomeAmount={incomeItem.amount}
                id={incomeItem.id}
                incomeItem = {incomeItem}
                deleteIncome={deleteIncome}
           
                />
              
            ))}
          </ul>
      </div>
      <div className="expense-list">
        <h3>支出一覧</h3>
        <ul className="list">
            {expenseItems.map((expenseItem) => (
              <ExpenseItem
                deleteExpense={deleteExpense}
                expenseText={expenseItem.text}
                expenseAmount={expenseItem.amount}
                expenseItem={expenseItem}
                id={expenseItem.id}
                // key={expenseItem.docId}
                // incomeTotal={incomeTotal}
                // selectedMonth={selectedMonth}
                // thisMonth={thisMonth}
              />
            ))}
          </ul>
      </div>
    </div>
  )
}

export default ItemsList