import express, { json } from 'express';
import mysql from 'mysql';
import cors from 'cors';


const app = express();
const PORT = 8800;

//database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "passwordmanager",
});

//allow CORS 
app.use(cors());

//accept any JSON format
app.use(express.json());

// add data to databse
app.post(`/add`, (req, res) => {
    const sqlQuery = "INSERT INTO passwords (`password`, `description`) VALUES (?)";
    const values = [
        req.body.password,
        req.body.description
    ];
    db.query(sqlQuery, [values], (err, response) => {
        if (err) return res.json(err);
        else return res.json("Sucessfully added");
    });
});

//server and port check
app.listen(PORT, () => {
    console.log('====================================');
    console.log(`Server Running on port ${PORT}`);
    console.log('====================================');

})