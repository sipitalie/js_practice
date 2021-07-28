const service = require('../service/api');

Array.prototype.meuMap = function (callback) {
    const novoArrayMapeado = []
    for (let indice = 0; indice <= this.length - 1; indice++) {
        const resultado = callback(this[indice], indice)
        novoArrayMapeado.push(resultado)
    }
    return novoArrayMapeado
}

async function main() {
    try {
        const namesForEach = []
        const result = await service.obterPessoa('a')
        //use forEach
        console.time('forEach')
        result.results.forEach(pessoa => {
            namesForEach.push(pessoa.name)
        });
        console.timeEnd('forEach')
        //use map
        console.time('map')
        const namesMap = result.results.map(pessoa => pessoa.name);
        console.timeEnd('map')

        //use meuMap
        console.time('meuMap')
        const namesUseMeuMap = result.results.meuMap(function (pessoa, indice) {
            return pessoa.name
        });
        console.timeEnd('meuMap')
        console.log('names => ', namesForEach, namesMap, namesUseMeuMap)

    } catch (error) {
        console.error('error', error)
    }
}
main()
