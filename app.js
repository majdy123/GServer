var express = require('express');
const mysql = require("mysql2");
const db = mysql.createPool({
    host : "localhost",
    user: "root",
    password : "",
    database : "gym_graduation_project"
});
var app = express();
app.use(express.json());


app.get("/api/test", (req,res)=>{
    const sqladd = "SELECT * FROM `person` WHERE 1";
    db.query(sqladd,(error,result)=>{
        if(error){
            res.send(error);
        }
        else{
            res.send(result);
        }
    })

})


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});