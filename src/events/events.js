const EventEmitter = require('events');


class MeuEmissorDeEventos extends EventEmitter {

}
const meuEmissor = new MeuEmissorDeEventos()

const nomeEvento = 'user:click'

meuEmissor.on(nomeEvento, (click) => {
    console.log('user:click', click);

})
let count = 0
setInterval(() => {
    meuEmissor.emit(nomeEvento, 'Na barra de rolagem ' + count++)
}, 1000);
