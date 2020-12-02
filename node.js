const express = require("express");
const app = express();
const mysql = require("mysql");
// console.log(express,'express');
// console.log(app, "app");
// console.log(mysql);
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "979190.wawzm", // 改成你自己的密码
  database: "data-programe", // 改成你的数据库名称
  port: "3306"
});
connection.connect();
// //跨域问题解决方面
// const cors = require("cors");
// app.use(
//   cors({
//     origin: ["http://localhost:8080"],
//     methods: ["GET", "POST"]
//   })
// );
// //跨域问题解决方面
// app.all("*", function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:8080");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
//   next();
// });
// console.log(connection);
//查询出所有数据
app
  .get("/api/getlist", (req, res) => {
    // let sql = "SELECT * FROM student";
    // console.log(res);
    connection.query("SELECT * FROM student", (err, results) => {
      if (err) {
        return res.json({
          err_code: 0,
          message: "数据不存在"
        });
      } else {
        console.log(results);
      }
      // res.send("");
      // res.json({
      //   err_code: 200,
      //   message: results,
      //   affextedRows: results.affextedRows
      // });
    });
  })
  .listen(3000, "192.168.111.1");
connection.end();
