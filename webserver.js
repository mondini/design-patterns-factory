function createWebserver() {

    function start(){
        console.log("-> [webserver] Iniciando...");
        console.log("-> [webserver] Esperando algum coisa acontecer...");
        console.log("-> [webserver] Inicialização finalizada.");
    }

    function stop(){
        console.log("-> [webserver] Parando...");
        console.log("-> [webserver] Rezando um Pai nosso...");
        console.log("-> [webserver] Fazendo a drenagem das instâncias...");
        console.log("-> [webserver] Parado com sucesso.");
    }

    return {
        start,
        stop
    }
}

//export default createWebserver;
module.exports = createWebserver;