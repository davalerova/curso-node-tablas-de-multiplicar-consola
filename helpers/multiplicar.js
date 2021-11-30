const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  let salida = '';
  let consola = '';
  for (let i = 1; i <= hasta; i++) {
    salida += `${base} ${'x'} ${i} ${'='} ${base * i}\n`;
    consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
  }
  if (listar) {
    console.log('====================================='.green);
    console.log(`             Tabla del ${colors.blue(base)}`.green);
    console.log('====================================='.green);
    console.log(consola);
  }
  try {
    const nombreArchivo = `./salida/tabla_del_${base}.txt`;
    fs.writeFileSync(nombreArchivo, salida);
    return nombreArchivo;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
