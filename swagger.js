const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const options = {
    swaggerDefinition:{
        info:{
            title:'Nodejs Mongodb JWT API Documentation',
            version: '1.0.0',
            description:"API Documentation for Nodejs Crud With JWT Authentication",
        },
        basePath : '/',
    },
    apis:['./routes/*.js',], //Path to the Api routes
};
const specs = swaggerJsdoc(options);

module.exports = {
    serve: swaggerUi.serve,
    setup: swaggerUi.setup(specs)
}