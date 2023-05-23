import React from 'react'

const IncomeItem = ({incomeText,incomeAmount,id,incomeItem,deleteIncome}) => {



// console.log(incomeItem)
    const handleDelete = (id) => {
        
        
        // alert(`ID番号： ${id} テキスト内容: ${incomeText} の削除ボタンがおされました`);
        deleteIncome(id);

        
    }
  return (
    <li className="thisMonthList" key={id}>
      <div>{incomeText}</div>
      <div className="money-plus">+{Number(incomeAmount).toLocaleString()}円</div>
      <button className="delete-btn" onClick={() => handleDelete(id)}>×</button>
    </li>
  )
}

export default IncomeItem