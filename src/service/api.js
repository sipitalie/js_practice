const axios = require('axios');

const Url = 'http://swapi.dev/api/people/'

async function obterPessoa(nome) {
    const url = `${Url}/?search=${nome}&format=json`
    const response = await axios.get(url)
    return response.data
}
module.exports = {
    obterPessoa

}