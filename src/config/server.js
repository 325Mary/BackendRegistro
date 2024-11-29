const express = require('express');
const cors =  require('cors');
const morgan = require('morgan');
require('dotenv').config()

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

module.exports= backend;