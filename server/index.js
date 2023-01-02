const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;


const db = mysql.createConnection({
    user: "root",
    host: "localhost:3306",
    password: "",
    database: "passwordmanager",
});
app.use(cors());
// app.use(express.json());
// app.use(bodyParser.json()) // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use('/api', Anyroute)

app.post(`/addpassword`, (res, req) => {
    const { password, description } = req.body;
    db.query(`INSERT INTO passwords(password, description) VALUES (${password},${description})`,
        (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send("Success");
            }
        });
});

app.listen(PORT, () => {
    console.log('====================================');
    console.log();
    console.log('====================================');
    console.log("Server Running");
})