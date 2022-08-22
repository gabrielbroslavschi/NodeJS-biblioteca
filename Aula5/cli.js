const chalk = require('chalk')
const pegaArquivo = require('./index')
const validaURLs = require('./http.validacao')

const caminho = process.argv

async function processaTexto(caminhoDeArquivo){
    const resultado = await pegaArquivo(caminhoDeArquivo[2])
    if(caminho[3] == 'validar'){
        console.log(chalk.yellow('liks validados'),await validaURLs(resultado))
    }else{
        console.log(chalk.magenta('lista de links'), resultado)
    }
}

console.log(processaTexto(caminho))