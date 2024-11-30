const mysql =  require('mysql2');
require('dotenv').config();

// const pool= mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'backendRegistro'
// })
const pool = mysql.createPool({
    host: process.env.DB_HOST,      
    user: process.env.DB_USER,       
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_NAME      
});

pool.query('SELECT 1 + 1 AS solution', function(err, row){
    if(err){
        console.error('No se logro establecer conexion a mysql 1:', err)
        return
    }
    console.log('Conexion establecida a mysql:', row[0].solution);
    
})

module.exports= pool.promise()