const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'La base para calcular su tabla',
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    demandOption: false,
    describe: 'Imprime por consola la tabla de la base',
    default: false,
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    demandOption: true,
    describe: 'El valos hasta donde se imprimirá la tabla',
    default: 10,
  })
  .check((argv, options) => {
    if (isNaN(argv.hasta)) {
      throw 'La base tiene que ser un número';
    }
    return true;
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw 'La base tiene que ser un número';
    }
    return true;
  }).argv;

// const base = 4;
//console.clear();

// console.log(argv);
module.exports = argv;
