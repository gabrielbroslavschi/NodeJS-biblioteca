const chalk = require('chalk')
const pegaArquivo = require('./index')
const caminho = process.argv

async function processaTexto(caminhoDeArquivo){
    const resultado = await pegaArquivo(caminhoDeArquivo[2])
    console.log(chalk.magenta('lista de links'), resultado)
}

console.log(processaTexto(caminho))