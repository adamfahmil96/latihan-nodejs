var mysql = require('mysql');   // memanggil library mysql

// buat koneksi database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'try_restapi'
});

conn.connect((err)=>{
    if (err) {
        throw err;
    }
    console.log('Mysql terkoneksi');
})

module.exports = conn;