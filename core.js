//ec modules
//import createDatabaseConnection from "./database.js";
//import createWebserver from "./webserver.js";

//commonjs
const createDatabaseConnection = require("./database");
const createWebserver = require("./webserver");


//esse configurations é uma injeção de dependencia, para ter o código mais testável
//assim, eu consigo informar as dependências do meu jeito, e não ficar enrraizado no código
function createCore(configurations = {}) {
    
    //sendo assim, caso venha algo de fora (factory database) será considerado, 
    //senão, será usada a factory padrão já defiida
    const database = configurations.database || createDatabaseConnection();
    const webserver = configurations.webserver || createWebserver();

    function start(){
        console.log("-> [core] Iniciando...");
        database.start();
        webserver.start();
        console.log("-> [core] Iniciado com sucesso.");
    }

    function stop(){
        console.log("-> [core] Parando...");
        webserver.stop();
        database.stop();
        console.log("-> [core] Parado com sucesso.");
    }

    return {
        start,
        stop
    }
}

//ec modules
//export default createCore;

//commonjs
module.exports = createCore;