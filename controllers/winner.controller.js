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
const winner_models_1 = __importDefault(require("../models/winner.models"));
const DataBroker_1 = __importDefault(require("../libs/DataBroker/DataBroker"));
const Clicolor_1 = __importDefault(require("../utils/colors/Clicolor"));
const WinnerController = {
    getAll: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        Clicolor_1.default.waitingMessage("Sending request for getAll service on winner resource...");
        try {
            let winners = yield winner_models_1.default.find();
            let totalWinners = winners.length;
            Clicolor_1.default.successMessage("Database request for getAll service on winner resource has been successfull!");
            let data = {
                status: 200,
                message: "Winner has been obtained successfully",
                data: {
                    totalWinners,
                    winners
                }
            };
            DataBroker_1.default.processData(res, data);
        }
        catch (error) {
            Clicolor_1.default.errorMessage("Database request for getAll service on winner resource has failed!");
            console.log(error);
            let data = {
                status: 401,
                message: "Winner have not been obtained successfully. Request have been failed!",
                data: error
            };
            DataBroker_1.default.processData(res, data);
        }
    }),
    createWinner: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        Clicolor_1.default.waitingMessage("Sending request for createWinner service on winner resource...");
        try {
            let response = yield winner_models_1.default.insertMany([{
                    eventShow: 1
                }]);
            let totalWinnerCreated = response.length;
            Clicolor_1.default.successMessage("Database request for createWinner service on winner resource has been successfull!");
            let data = {
                status: 200,
                message: "Winner has been created successfully",
                data: {
                    totalWinnerCreated,
                    winnerArrayCreated: response
                }
            };
            DataBroker_1.default.processData(res, data);
        }
        catch (error) {
            Clicolor_1.default.errorMessage("Database request for createWinner service on winner resource has failed!");
            console.log(error);
            let data = {
                status: 401,
                message: "Winner creation have been failed!",
                data: error
            };
            DataBroker_1.default.processError(res, data);
        }
    }),
    update: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        Clicolor_1.default.waitingMessage("Sending request for update service on winner resource...");
        try {
            const { ticketNumber, typeid, numid, gender, firstname, lastname } = req.body;
            let params = {
                ticketNumber,
                typeid,
                numid,
                gender,
                firstname,
                lastname
            };
            let winnerUpdated = yield winner_models_1.default.findOneAndUpdate({
                eventShow: 1
            }, params, {
                new: true
            });
            Clicolor_1.default.successMessage("Database request for update service on winner resource has been successfull!");
            let data = {
                status: 200,
                message: "Winner have been updated successfully",
                data: {
                    winnerUpdated
                }
            };
            DataBroker_1.default.processData(res, data);
        }
        catch (error) {
            Clicolor_1.default.errorMessage("Database request for update service on winner resource has failed!");
            console.log(error);
            let data = {
                status: 401,
                message: "Updating winner have been failed!",
                data: error
            };
            DataBroker_1.default.processError(res, data);
        }
    })
};
exports.default = WinnerController;
