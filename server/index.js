const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createPool({
    host:'localhost',
    user: 'root',
    password:'',
    database: 'CRUDDatabase',
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());


app.post("/api/insert", (req, res) => {

    const name = req.body.name
    const message = req.body.message

    const sqlInsert = "INSERT INTO contact (name, message) VALUES (?,?)"
    db.query(sqlInsert, [name, message], (err, result) => {
        console.log(err)
    })
});


app.get('/', (req, res) => {

    // const sqlInsert = "INSERT INTO Contact (Name, Message) VALUES ('Mark', 'Hello mark');"
    // db.query(sqlInsert, (err, result)=> {
    //  res.send('Hello Mark');   
    // })
    
});

app.listen(3001, () => {
    console.log('running on port 3001');
});