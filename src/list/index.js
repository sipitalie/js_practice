const service = require('../service/api');

async function main() {
    try {
        const result = await service.obterPessoa('a')
        const nameFor = []
        const nameForIn = []
        //usando for
        console.time('for')
        for (let i = 0; i <= result.results.length - 1; i++) {
            const pessoa = result.results[i]
            nameFor.push(pessoa.name)
        }
        console.timeEnd('for')

        //usando for in
        console.time('for in')
        for (let i in result.results) {
            const pessoa = result.results[i]
            nameForIn.push(pessoa.name)
        }
        console.timeEnd('for in')

        console.log('nomes=>:', nameFor, nameForIn)
    } catch (error) {
        console.error('error', error)
    }
}
main()
