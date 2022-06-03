"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const Server_1 = __importDefault(require("./server/Server"));
require("./database/mongo/MongoDB");
const config_1 = __importDefault(require("./config/config"));
const Clicolor_1 = __importDefault(require("./utils/colors/Clicolor"));
const server = new Server_1.default();
function main() {
    Clicolor_1.default.infoMessage(`Using ${config_1.default.general.mode} mode`);
    Clicolor_1.default.waitingMessage("Deploying server...");
    server.deploy();
}
main();
