const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

crearArchivo(argv.base, argv.listar, argv.hasta)
  .then((nombreArchivo) =>
    console.log(nombreArchivo.rainbow, 'creado'.underline)
  )
  .catch((err) => console.log(err));
