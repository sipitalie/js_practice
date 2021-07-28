const { obterPessoa } = require('../service/api');

Array.prototype.meuFilter = function (callback) {
    const list = []
    for (index in this) {
        const item = this[index]
        const result = callback(item, index, this)
        if (!result) continue;
        list.push(item)
    }
    return list
}

async function main() {
    try {

        const { results } = await obterPessoa('a')
        //use map
        console.time('map')
        const pesos = results.map(pessoa => parseInt(pessoa.height))
        console.timeEnd('map')

        //use reduce

        console.time('reduce')
        const total = pesos.reduce((anterior, proximo) => anterior + proximo)
        console.timeEnd('reduce')

        console.log(`pesos: [${pesos}], total: ${total}`)

    } catch (error) {
        console.error('error', error)
    }
}
main()
