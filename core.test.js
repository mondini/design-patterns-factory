//import createCore from "./core.js";
const createCore = require("./core");

//mock com a mesma "interface", permitindo que eu faça o teste de unidade corretamente
//sem chamar código que não desejo testar, no caso, database.js e webserver.js
function createMock(){
    function start(){
        console.log("-> [mock] ...")
    }

    function stop(){
        console.log("-> [mock] ...")
    }

    return {
        start,
        stop
    }
}

describe('Core quando importado', () => {
    test('deve conter os métodos start e stop', () => {
        const core = createCore();
        expect(core).toHaveProperty('start');
        expect(core).toHaveProperty('stop');
    });
});

describe('Core quando inicializado', () => {
    test('não deve retorna erros', () => {

        const databaseMock = createMock();
        const webserverMock = createMock();

        //inicia o core com o mock, para ele não usar as factorys 'reais'
        const core = createCore({
            database: databaseMock,
            webserver: webserverMock
        });

        expect(() => {
            core.start();
        }).not.toThrow();
    });
});