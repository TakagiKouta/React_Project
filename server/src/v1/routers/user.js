const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


//api/v1/household

//収入項目全権取得
router.get('/', async (req, res) => {
  // ExpenseItemsモデルの指定方法が間違っているかも？
  console.log("サーバー側のユーザー一覧取得APIに届きました")

  try {

    const users = await prisma.user.findMany();
    console.log(users)
    res.json({users: users, msg: "ユーザー一覧を取得しました"});

  }catch {
    res.status(500).json("サーバー側でエラーが発生しました");
  }
  

});


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

module.exports = router;