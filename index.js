require('./src/config/Database');
const server =  require('./src/config/server');

server.listen(server.get("port"), ()=>{
    console.log('servidor ejecutandose en el puerto:', server.get("port"));
    
})