const chalk = require('chalk')
const fs = require ('fs')

const texto = 'realizando um teste de arquivo de texto [<input>] (https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input)'

function extraiLinks(texto){
    const regex = /\((https?:\/\/[^$#\s].[^\s]*)/gm
    
    const linksExtraidos = regex.exec(texto)
    console.log(linksExtraidos)
}

extraiLinks(texto)

function trataErro(erro){
    throw new Error(chalk.red(erro.code, "Não há arquivo no caminho!"))

}


async function pegaArquivo(caminhoDoArquvo){
    const encoding = 'utf-8'
    try{
        const texto = await fs.promises.readFile(caminhoDoArquvo, encoding)
        console.log(chalk.green(texto))
    }catch(erro){
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
