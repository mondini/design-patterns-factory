const createWebserver = require("./webserver");

describe('webserver quando importado', () => {
    test('deve conter os métodos start e stop', () => {
        const webserver = createWebserver();
        expect(webserver).toHaveProperty('start');
        expect(webserver).toHaveProperty('stop');
    });
});

describe('webserver quando inicializado', () => {
    test('não deve retorna erros', () => {
        const webserver = createWebserver();
        expect(() => {
            webserver.start();
        }).not.toThrow();
    });
});