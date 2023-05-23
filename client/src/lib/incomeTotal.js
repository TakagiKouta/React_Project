import React from 'react'

export const totalCalc = (incomeItems) => {
console.log(incomeItems)
  
    const incomeAmounts = incomeItems.map(incomeItem => incomeItem.amount);
    return incomeAmounts.reduce((acc, cur) => acc += cur, 0);
  };