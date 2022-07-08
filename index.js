const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

/* 
  全てのルートでクッキーの取得
  署名をセットするcookieParser([署名値(本来は分かり辛いもの)])
*/
app.use(cookieParser('mysecret'));
/* 
Cookieの確認方法：Googleの場合は開発者ツール→アプリケーション→Cookieで確認できる。
*/
app.get("/greet", (req, res) => {
  // サーバにセットされたCookieの取得
  const cookies = req.cookies;
  res.send(cookies);
});

/* 
　{ signed: true}で署名を設定
*/
app.get("/setSignCookie", (req, res) => {
  // Cookieを署名付きでセットする
  res.cookie('signCookie', 'signCookieValue', { signed: true});
  res.send('署名付きクッキーをセットしました。')
});

app.get("/getSignCookie", (req, res) => {
  // 普通のクッキー
  console.log(req.cookies);
  // 署名付きのクッキー
  // 署名の改ざん検知の為、暗号は保証していない。改ざんされていた場合、falseを返却
  console.log(req.signedCookies);
  res.send('署名付きクッキー取得しました。')
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
