const chalk = require('chalk')

console.log(chalk.blue('vamos começar'))


const paragrafo = 'texto retornado por um função'

function text(string){
    return string
}

console.log(chalk.green(text(paragrafo)))