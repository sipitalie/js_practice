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
        //use filter
        console.time('filter')
        const familiaLars = results.filter(pessoa => {
            const result = pessoa.name.toLowerCase().indexOf('lars') !== -1
            return result
        });
        console.timeEnd('filter')

        console.time('use map filter')
        const names = familiaLars.map(pessoa => pessoa.name)
        console.timeEnd('use map filter')

        //use meuFilter
        console.time('meu filter')
        const familiaLarsMeuFilter = results.meuFilter(pessoa =>
            pessoa.name.toLowerCase().indexOf('lars') !== -1

        );
        console.timeEnd('meu filter')

        console.time('use map meufilter')
        const namesMeuFilter = familiaLarsMeuFilter.map(pessoa => pessoa.name)
        console.timeEnd('use map meufilter')

        console.log('names => ', names, namesMeuFilter)

    } catch (error) {
        console.error('error', error)
    }
}
main()
