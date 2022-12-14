const chalk = require('chalk')
const fs = require ('fs')


function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
    const arrayResultados = []
    let temp
    while((temp = regex.exec(texto)) !== null) {
      arrayResultados.push({ [temp[1]]: temp[2] })
    }
    return arrayResultados.length === 0 ? 'não há links' : arrayResultados
  }


function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'))
}


async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8'
    try {
      const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
      return extraiLinks(texto)
    } catch(erro) {
      trataErro(erro)
    }
}

/*
function pegaArquivo(caminhoDoArquvo){
    const encoding = 'utf-8'


    //Essa estrutura está encadeada
    fs.promises
    .readFile(caminhoDoArquvo, encoding)
    .then((texto) => console.log(chalk.green(texto)))
    .catch((erro) => trataErro(erro))
}
*/

/*
function pegaArquivo(caminhoDoArquvo){
    const encoding = 'utf-8'
    fs.readFile(caminhoDoArquvo, encoding, (erro, texto) => {
        console.log(chalk.green(texto))

        if(erro){
            trataErro(erro)
        }

    })
}
*/

//pegaArquivo('./arquivos/texto1.md')


//pegaArquivo('./arquivos/texto1.md');

module.exports = pegaArquivo