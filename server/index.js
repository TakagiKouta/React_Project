const express = require("express");
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');
//CORS policy解消
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// app.use(express.urlencoded({extended: false}));
// app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// router.use(bodyParser.urlencoded({ extended: false }));
// router.use(bodyParser.json());
app.use("/api/v1", require("./src/v1/routers"))

//Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', function (req, res) {
  res.send('hello world')
})

// クライアントでいかのAPIを叩いてみよう！



app.listen(PORT, () => {
    console.log(`expressローカルサーバ${PORT}番号で作動中`)
})

module.exports = app;