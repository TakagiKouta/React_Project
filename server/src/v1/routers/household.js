const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


//api/v1/household


router.get('/incomeData', async (req, res) => {
  // ExpenseItemsモデルの指定方法が間違っているかも？
  console.log("収入項目全権取得サーバーに届きました")

  try {

    //収入項目全権取得
    const incomeItems = await prisma.IncomItems.findMany();
    console.log(incomeItems)

  
    
    //収入を全権取得して返す
    res.json({incomeItems: incomeItems, msg: "項目を全権取得しました"});

  }catch {
    res.status(500).json("サーバー側でエラーが発生しました");
  }
  

});

router.get('/expenseData', async (req, res) => {

  // ExpenseItemsモデルの指定方法が間違っているかも？
  console.log("支出項目全権取得サーバーに届きました")

  try {

      //支出項目全権取得
      const ExpenseItems = await prisma.ExpenseItems.findMany();
      console.log(ExpenseItems)

  
    //支出を全権取得して返す
    res.json({ExpenseItems: ExpenseItems, msg: "支出項目を取得しました"});

  }catch {
    res.status(500).json("サーバー側でエラーが発生しました");
  }
  

});


//支出項目新規作成
router.post('/expense/create', async (req, res) => {
  const { text, amount } = req.body;

  console.log(text);
  // console.log(text);
  console.log("出費新規作成サーバーには届いたよ")
  try {
    const newExpenseItem = await prisma.ExpenseItems.create({
      data: {
        text,
        amount,
      },
    });
    console.log(newExpenseItem)
    return res.status(201).json({newExpenseItem: newExpenseItem});
  }catch {
    res.status(500).json("サーバー側でエラーが発生しました");
  }
  
});



//収入項目新規作成
router.post('/income/create', async (req, res) => {

  const { text, amount } = req.body;

  console.log(text);
  // console.log(text);
  console.log("新規作成サーバーには届いたよ")
  try {
    const newIncomeItem = await prisma.IncomItems.create({
      data: {
        text,
        amount,
      },
    });
    console.log(newIncomeItem)
    return res.status(201).json({newIncomeItem: newIncomeItem});
  }catch {
    res.status(500).json("サーバー側でエラーが発生しました");
  }
  
});


//収入項目削除
router.delete('/income/delete/:id', async (req, res) => {
  console.log("収入項目削除APIに届きました")
  const { id } = req.params;

  console.log(id)

  await prisma.IncomItems.delete({
    where: { id: parseInt(id) },
  });
  res.json({ message: 'IncomeItem deleted' });
});

//支出項目削除
router.delete('/expense/delete/:id', async (req, res) => {
  console.log("支出項目削除APIに届きました")
  const { id } = req.params;

  console.log(id)

  await prisma.ExpenseItems.delete({
    where: { id: parseInt(id) },
  });
  res.json({ message: 'ExpenseItem deleted' });
});

module.exports = router;