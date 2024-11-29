const mysql =  require('mysql2');

const pool= mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'backendRegistro'
})

pool.query('SELECT 1 + 1 AS solution', function(err, row){
    if(err){
        console.error('No se logro establecer conexion a mysql 1:', err)
        return
    }
    console.log('Conexion establecida a mysql:', row[0].solution);
    
})

module.exports= pool.promise()