//import createCore from "./core.js";
const createCore = require("./core");

const core = createCore();

try {
    core.start();
    core.stop();
} catch (error) {
    console.log("-> [index] Erro não tratado capturado.");
    console.log(error);
}