function getUser() {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                id: 1,
                nome: 'Estevão',
                dataNascimento: new Date()
            })
        }, 1000)
    })

}
function getPhone(idUser) {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                telefone: '1199002',
                ddd: 11
            })
        }, 2000)
    })

}

function getAdress(idUser) {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                rua: 'Cotel',
                sector: 4
            })
        }, 1000)
    })

}

getUser().then(res => {
    console.log(res)
}
)