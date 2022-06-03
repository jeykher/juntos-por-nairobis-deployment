"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../../config/config"));
const keys_1 = __importDefault(require("../../keys/keys"));
const Clicolor_1 = __importDefault(require("../../utils/colors/Clicolor"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let mongoDBDriver = undefined;
        switch (config_1.default.database.engine) {
            case "local":
                mongoDBDriver = `${config_1.default.database.driver}://${config_1.default.database.host}:${config_1.default.database.port}/${config_1.default.database.name}`;
                break;
            case "atlas":
                mongoDBDriver = `${config_1.default.database.driver}://${config_1.default.database.user}:${keys_1.default.mongoDBAtlas.key}@${config_1.default.database.host}/${config_1.default.database.name}?retryWrites=true&w=majority`;
                break;
            default:
                break;
        }
        Clicolor_1.default.waitingMessage("Establish MongoDB Atlas database connection...");
        const db = yield mongoose_1.default.connect(mongoDBDriver);
        Clicolor_1.default.successMessage(`MongoDB Atlas database connection has been successfull`);
        Clicolor_1.default.successMessage(`Server has been connected ${db.connection.name} database`);
    }
    catch (error) {
        Clicolor_1.default.errorMessage("MongoDB database connection has failed!");
        console.error(error);
    }
}))();
