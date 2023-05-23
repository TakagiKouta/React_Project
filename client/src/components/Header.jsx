import React from 'react'
// import Button from '@mui/material-next/Button';
import Button from '@mui/material/Button';

const Header = ({setNextMonth,setPrevMonth,date}) => {

  const today = date;
  console.log(today)
  const year = today.getFullYear();
  const month = today.getMonth() + 1;


  return (
    <div className="head">
      <Button variant="contained">Sign Out</Button>
      <div className="showMonth">
        <button onClick={setPrevMonth}>←前月 </button>
        <h1>{year}年{month}月</h1>
        <button onClick={setNextMonth}> 次月→</button>
      </div>
  </div>
  )
}

export default Header