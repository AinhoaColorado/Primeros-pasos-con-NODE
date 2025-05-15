const log = require('logplease');
const logger = log.create('paridad');
const esPar = require('./numeros');

const numeros = [2, 3, 101, 201, 202, 100];

numeros.forEach(numero => {
  if (esPar(numero)) {
    logger.info(`El número ${numero} es par`);
  } else {
    logger.error(`El número ${numero} no es par`);
  }
});
