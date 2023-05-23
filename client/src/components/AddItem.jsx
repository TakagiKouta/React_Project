import React from 'react'

const AddItem = ({type,setType,inputText,setInputText,inputAmount,setInputAmount,addIncome,addExpense,thisMonth,selectedMonth}) => {

  const typeHandler = (e) => {
    setType(e.target.value);
  }

  const rest = () => {
    setInputAmount(0);
    setInputText("");

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    console.log(data); 

    const text = data.get("text").trim();
    console.log(text);



    if(inputText == '' || inputAmount <= 0) {
      return alert("入力が正しくありません");
    }
    
    console.log(inputText);
    console.log(typeof inputAmount);

    if(type === "inc") {
      
      addIncome(inputText,inputAmount);

    } else {
      console.log(inputText)
      addExpense(inputText,inputAmount);

    }


    rest();
  }

  const thisMonthForm = () => {

    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <select onChange={typeHandler} required>
          <option value="inc">+</option>
          <option value="exp">-</option>
        </select>
        <div className="add-text">
          <label>内容</label>
          <input type="text" required onChange={(e) => setInputText(e.target.value)} value={inputText} id='text' name="text"/>
        </div>
        <div className="add-amount">
          <label>金額</label>
          <input type="number" min={0} onChange={(e) => setInputAmount(parseInt(e.target.value))} value={inputAmount}/> 
          <div>円</div>
        </div>
        <div className="add-btn">
          <button type="submit">追加</button>
        </div>
      </form> 
    )

  }
  

  const otherMonthForm = () => {

    return (
      <form></form>
    )
  }


  return (
    <>
      {thisMonth === selectedMonth ? thisMonthForm() : otherMonthForm()}
    </>
  )

}

export default AddItem