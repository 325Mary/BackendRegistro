const express = require('express');
const cors =  require('cors');
const morgan = require('morgan');
require('dotenv').config()
const { swaggerUi, specs } = require('../../swagger');

const contactRoutes = require('../../routes/contactos'); 
const UsuarioRoutes = require('../Usuarios/Routes/Usuario.Routes')
const RegistroRoutes =  require('../Registro/Routes/Registro.Routes')
const port =  3001;

const backend = express();
backend.use(cors());
backend.use(express.json());
backend.use(express.urlencoded({ extended: true }));
backend.use(morgan("dev"));


backend.use(UsuarioRoutes);
backend.use(RegistroRoutes)

backend.set('port', process.env.PORT || port);

backend.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

backend.use('/api', contactRoutes); 
module.exports= backend;