"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class Clicolor {
    constructor() {
        this.log = console.log;
    }
    infoMessage(message) {
        this.log('\n', chalk_1.default.bgBlueBright.bold("INFO: "), chalk_1.default.bold(message));
    }
    warningMessage(message) {
        this.log('\n', chalk_1.default.bgYellowBright.bold("WARNING: "), chalk_1.default.bold(message));
    }
    waitingMessage(message) {
        this.log('\n', chalk_1.default.bgMagentaBright.bold("WAITING: "), chalk_1.default.bold(message));
    }
    successMessage(message) {
        this.log('\n', chalk_1.default.bgGreenBright.bold("SUCCESS: "), chalk_1.default.bold(message));
    }
    errorMessage(message) {
        this.log('\n', chalk_1.default.bgRedBright.bold("INFO: "), chalk_1.default.bold(message));
    }
}
;
const clicolor = new Clicolor();
exports.default = clicolor;
