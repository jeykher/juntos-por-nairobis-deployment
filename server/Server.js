"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const App_1 = __importDefault(require("../app/App"));
const Clicolor_1 = __importDefault(require("../utils/colors/Clicolor"));
const app = new App_1.default();
class Server {
    constructor() {
        this.server = http_1.default.createServer(app.api);
    }
    deploy() {
        this.server.listen(app.api.get("serverPort"), () => {
            Clicolor_1.default.successMessage(`Server deployed on port ${app.api.get("serverPort")}`);
        });
    }
}
;
exports.default = Server;
