const mysql = require("mysql2")

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'mahasiswa1'
});

connection.connect(error =>{
    if(error) throw error;
    console.log("database sudah terhubung")
})

module.exports = connection;