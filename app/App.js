"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
const config_1 = __importDefault(require("../config/config"));
const ticket_routes_1 = __importDefault(require("../routes/ticket.routes"));
const winner_routes_1 = __importDefault(require("../routes/winner.routes"));
class App {
    constructor() {
        this.api = (0, express_1.default)();
        this.applySettings();
        this.useMiddlewares();
        this.useRoutes();
    }
    applySettings() {
        this.api.set('serverPort', config_1.default.server.port);
    }
    useMiddlewares() {
        this.api.use(express_1.default.urlencoded({
            extended: false
        }));
        this.api.use(express_1.default.json());
        this.api.use((0, morgan_1.default)('dev'));
        this.api.use((0, cors_1.default)());
        this.api.use((0, compression_1.default)());
    }
    useRoutes() {
        this.api.use('/ticket', ticket_routes_1.default);
        this.api.use('/winner', winner_routes_1.default);
    }
}
;
exports.default = App;
