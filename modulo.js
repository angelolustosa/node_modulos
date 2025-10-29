import os from 'os';
import { converterByteToMb } from './util/conversor.js'; /* importa o modulo customizado */
import chalk from 'chalk';

const log = console.log;

const tipo = os.type();
const plataforma = os.platform();
const memoria_livre = os.freemem() //em bytes

log(chalk.blue.bold(`=== Informação do Sistema ===\n`));


log(`Tipo: ${plataforma}`);
log(`Tipo: ${tipo}`);
log(`Tipo: ${os.release()}`);
log(`Tipo: ${memoria_livre} bytes`);
log(`Tipo: ${converterByteToMb(memoria_livre)} MB`);

// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
