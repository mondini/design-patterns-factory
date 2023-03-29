function createDatabaseConnection() {

    function start(){
        console.log("-> [database] Iniciando...");
        console.log("-> [database] Conectando ao MySQL...");
        console.log("-> [database] Rodando rotinas de importação...");
        console.log("-> [database] Inicialização finalizada.");

        //simulando erro para cagar com o teste do core
        throw new Error("Erro genérico de conexão.");
    }

    function stop(){
        console.log("-> [database] Parando...");
        console.log("-> [database] Fechando conexões do MySQL...");
        console.log("-> [database] Parado com sucesso.");
    }

    return {
        start,
        stop
    }
}

//export default createDatabaseConnection;
module.exports = createDatabaseConnection;