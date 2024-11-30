const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Gestión de Contactos',
            version: '1.0.0',
            description: 'Una API para gestionar usuarios y contactos.',
        },
    },
    apis: ['./routes/*.js'],  
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
