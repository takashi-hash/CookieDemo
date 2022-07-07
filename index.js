const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

/* 
  全てのルートでクッキーの取得
*/
app.use(cookieParser());
/* 
Cookieの確認方法：Googleの場合は開発者ツール→アプリケーション→Cookieで確認できる。
*/
app.get("/greet", (req, res) => {
  // Cookieの取得
  const cookies = req.cookies;
  res.send(cookies);
});

app.get("/", (req, res) => {
  // Cookieの設定
  res.cookie("cookieName", "cookieNameValue");
  res.cookie("animal", "cat");
  res.send("初めてのcookie");
});

app.listen("3000", (req, res) => {
  console.log("3000ポートでスタート");
});
