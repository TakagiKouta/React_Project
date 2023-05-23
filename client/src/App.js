// import { Route, Router } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
// import PrivateRoute from './components/PrivateRoute';
import { useEffect, useState } from 'react';
// import axios from "axios";
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import AddItem from './components/AddItem';
import ItemsList from './components/ItemsList';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
// import AuthLayout from './components/layout/AuthLayout';
import householdAPI from './api/household';

import { totalCalc } from './lib/incomeTotal';
import PrivateRoute from './pages/auth/PrivateRoute';
import TestHome from './pages/auth/TestHome';

function App() {


const [inputText, setInputText] = useState("");
const [inputAmount, setInputAmount] = useState(0);
const [incomeItems, setIncomeItems] = useState([]);
const [expenseItems, setExpenseItems] = useState([]);
const [type, setType] = useState("inc");
const [date, setDate] = useState(new Date());




//データ全権取得
useEffect(() => {
  getIncome();
  getExpense();
  console.log("変更された")
}, []);


//収入全権取得
const getIncome = async() => {

  try {
    const res = await householdAPI.getIncomeData();
    console.log(res);
    console.log(res.incomeItems);
    console.log(res.msg);
    setIncomeItems(...incomeItems, res.incomeItems)
    console.log(incomeItems)

  }catch(err) {
    alert(err);
  }


}

//支出全権取得
const getExpense = async() => {

  try {
    const res = await  householdAPI.getExpenseData();
    console.log(res);
    console.log(res.ExpenseItems);
    console.log(res.msg);
    setExpenseItems(...expenseItems, res.ExpenseItems)
    console.log(expenseItems)

  }catch(err) {
    alert(err);
  }
}


//収入項目追加したとき（create）
const addIncome = async(text, amount) => {

  console.log(text);

  try {

    const res = await householdAPI.createIncome({
      text,
      amount,
    });


    //React用State更新
    setIncomeItems([...incomeItems, res.newIncomeItem]);
    console.log(res)
    console.log(res.newIncomeItem)
    console.log(incomeItems)

  }catch(err) {
    console.log(err);
  }
  

}

//支出項目追加したとき
const addExpense = async(text, amount) => {

  console.log(text);

  try {

    const res = await householdAPI.createExpense({
      text,
      amount,
    });


    //React用State更新
    setExpenseItems([...expenseItems, res.newExpenseItem]);
    console.log(res)
    console.log(res.newExpenseItem)
    console.log(expenseItems)

  }catch(err) {
    console.log(err);
  }
  

}

//収入項目を削除したとき
const deleteIncome = async(id) => {

  console.log("削除関数には届きました")
  console.log(id);

  try {
    
    const res = await householdAPI.deleteIncome(id);
    //React用State更新
    setIncomeItems(incomeItems.filter((incomeItem) => incomeItem.id !== id));

    console.log(res.message)
    console.log(incomeItems)

  }catch(err) {
    console.log(err);
  }
  

}

const deleteExpense = async(id) => {

  console.log("削除関数には届きました")
  console.log(id);

  try {
    
    const res = await householdAPI.deleteExpense(id);
    //React用State更新
    setExpenseItems(expenseItems.filter((expenseItem) => expenseItem.id !== id));

    console.log(res.message)
    console.log(expenseItems)

  }catch(err) {
    console.log(err);
  }
  

}

//収入の合計値
const incomeTotal = totalCalc(incomeItems)
console.log(incomeTotal)


//日付計算
const setPrevMonth = () => {
  
  const year = date.getFullYear();
  const month = date.getMonth()-1;
  const day = date.getDate();
  setDate(new Date(year, month, day));
}

const setNextMonth = () => {
  const year = date.getFullYear();
  const month = date.getMonth()+1;
  const day = date.getDate();
  setDate(new Date(year, month, day));
}
// 日付計算ここまで


const today = new Date();
const thisMonth = today.getMonth() + 1;
const selectedMonth = date.getMonth() + 1;



  return (
    <>

          <Router>
            <Routes>
              
                <Route exact path="/test" element={<PrivateRoute component={TestHome}/>} />
                <Route path="/login" element={<Login />} />
                <Route exact path="/signup" element={<SignUp />} />
              
            </Routes>
          </Router>
    

    <div className="container">
      <div className="top">
        <Header 
          date={date}
          setPrevMonth={setPrevMonth}
          setNextMonth={setNextMonth}
        />
        <Balance 
          incomeTotal={incomeTotal}
          expenseItems={expenseItems}
        />
        <IncomeExpense 
          incomeTotal={incomeTotal}
          expenseItems={expenseItems}
        />
     </div>
        <AddItem
          addIncome={addIncome}
          addExpense={addExpense}
          inputText={inputText}
          setInputText={setInputText}
          inputAmount={inputAmount}
          setInputAmount={setInputAmount}
          type={type}
          setType={setType}
          selectedMonth={selectedMonth}
          thisMonth={thisMonth}
        />
        <ItemsList 
          deleteIncome={deleteIncome}
          deleteExpense={deleteExpense}
          // incomeTotal={incomeTotal}
          incomeItems={incomeItems} 
          expenseItems={expenseItems}
          // selectedMonth={selectedMonth}
          // thisMonth={thisMonth}
        />
         
    </div>
 
   
    </>

  )
   

   
}

export default App;

