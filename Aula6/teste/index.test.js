const pegaArquivo = require('../index')

const arrayResult = [{
    FileList:'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
}]

describe('pegaArquivo::', ()=> {
    it('deve ser uma função', ()=> {
        expect(typeof pegaArquivo).toBe('function')
    })
    it('deve retornar array com resultados', async () => {
        const resultado = await pegaArquivo('C:/Users/gabriel/Documents/NodeJs Criando sua biblioteca/Aula6/teste/arquivos2/texto1.md')
        expect(resultado).toEqual(arrayResult)
    })
    it('deve retornar mensagem "não há links"', async () => {
        const resultado = await pegaArquivo('C:/Users/gabriel/Documents/NodeJs Criando sua biblioteca/Aula6/teste/arquivos2/texto.md')
        expect(resultado).toBe('não há links')
    })
})
