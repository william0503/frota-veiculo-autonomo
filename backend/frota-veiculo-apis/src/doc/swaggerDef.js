const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "Frota de veículos autonomos",
        version: "1.0.0",
        description:  "API para gestão de frota de veículos autonomos",
        license: {
          name: "MIT",
          url: "https://choosealicense.com/licenses/mit/"
        },
        contact: {
          name: "Swagger",
          url: "https://swagger.io",
          email: "Info@SmartBear.com"
        }
      },
      servers: [
        {
          url: "http://localhost:3001/api/"
        }
      ]
    },
    apis: ['../backend/frota-veiculo-apis/src/routes.js', '../backend/frota-veiculo-apis/src/models/*.js']
  };


module.exports = swaggerJsdoc(options);
