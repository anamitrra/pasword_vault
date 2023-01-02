const express = require('express');
const mysql = require('mysql');
const cors = require(`cors`);
const app = express();
const PORT = 3001;


const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "passwordmanager",
});

app.use(cors());
app.use(express.json());



app.post("/addpassword", (res, req) => {
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