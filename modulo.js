const os = require('os');
/* importa o modulo customizado */
const { converterByteToMb } = require('./util/conversor.js')
const tipo = os.type();
const plataforma = os.platform();
const memoria_livre = os.freemem() //em bytes

console.log(`Tipo: ${plataforma}`);
console.log(`Tipo: ${tipo}`);
console.log(`Tipo: ${os.release()}`);
console.log(`Tipo: ${memoria_livre} bytes`);
console.log(`Tipo: ${converterByteToMb(memoria_livre)} MB`);