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
const ticket_models_1 = __importDefault(require("../models/ticket.models"));
const ticketArray_1 = __importDefault(require("../database/mongo/data/ticketArray"));
const DataBroker_1 = __importDefault(require("../libs/DataBroker/DataBroker"));
const Clicolor_1 = __importDefault(require("../utils/colors/Clicolor"));
const TicketController = {
    getAll: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        Clicolor_1.default.waitingMessage("Sending request for getAll service on ticket resource...");
        try {
            let tickets = yield ticket_models_1.default.find().sort({
                ticketNumber: 'asc'
            });
            let totalTickets = tickets.length;
            Clicolor_1.default.successMessage("Database request for getAll service on ticket resource has been successfull!");
            let data = {
                status: 200,
                message: "All tickets have been obtained successfully",
                data: {
                    totalTickets,
                    tickets
                }
            };
            DataBroker_1.default.processData(res, data);
        }
        catch (error) {
            Clicolor_1.default.errorMessage("Database request for getAll service on ticket resource has failed!");
            console.log(error);
            let data = {
                status: 401,
                message: "All tickets have not been obtained successfully. Request have been failed!",
                data: error
            };
            DataBroker_1.default.processData(res, data);
        }
    }),
    getOneById: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            Clicolor_1.default.successMessage("Database request for getOneById service on ticket resource has been successfull!");
            const { id } = req.body;
            let ticket = yield ticket_models_1.default.findById(id).exec();
            let data = {
                status: 200,
                message: "Ticket have been obtained successfully",
                data: {
                    ticket
                }
            };
            DataBroker_1.default.processData(res, data);
        }
        catch (error) {
            Clicolor_1.default.errorMessage("Database request for getOneById service on ticket resource has failed!");
            console.log(error);
            let data = {
                status: 401,
                message: "Ticket by id service has been failed!",
                data: error
            };
            DataBroker_1.default.processError(res, data);
        }
    }),
    getOneByNumber: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            Clicolor_1.default.successMessage("Database request for getOneByNumber service on ticket resource has been successfull!");
            const { ticketNumber } = req.body;
            let ticket = yield ticket_models_1.default.findOne({
                ticketNumber
            });
            let data = {
                status: 200,
                message: "Ticket have been obtained successfully",
                data: {
                    ticket
                }
            };
            DataBroker_1.default.processData(res, data);
        }
        catch (error) {
            Clicolor_1.default.errorMessage("Database request for getOneByNumber service on ticket resource has failed!");
            console.log(error);
            let data = {
                status: 401,
                message: "Ticket by number service has been failed!",
                data: error
            };
            DataBroker_1.default.processError(res, data);
        }
    }),
    createLottery: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        Clicolor_1.default.waitingMessage("Sending request for createLottery service on ticket resource...");
        try {
            let response = yield ticket_models_1.default.insertMany(ticketArray_1.default);
            let totalTicketCreated = response.length;
            Clicolor_1.default.successMessage("Database request for createLottery service on ticket resource has been successfull!");
            let data = {
                status: 200,
                message: "Lottery template have been created successfully",
                data: {
                    totalTicketCreated,
                    ticketArrayCreated: response
                }
            };
            DataBroker_1.default.processData(res, data);
        }
        catch (error) {
            Clicolor_1.default.errorMessage("Database request for createLottery service on ticket resource has failed!");
            console.log(error);
            let data = {
                status: 401,
                message: "Lottery template creation have been failed!",
                data: error
            };
            DataBroker_1.default.processError(res, data);
        }
    }),
    create: (req, res, next) => {
        return res.status(200).json({
            message: "You have used create service from ticket resource."
        });
    },
    update: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        Clicolor_1.default.waitingMessage("Sending request for update service on ticket resource...");
        try {
            const { id, typeid, numid, gender, firstname, lastname, email, status, active } = req.body;
            let params = {
                typeid,
                numid,
                gender,
                firstname,
                lastname,
                email,
                status,
                active
            };
            let ticketUpdated = yield ticket_models_1.default.findByIdAndUpdate(id, params, {
                new: true
            });
            Clicolor_1.default.successMessage("Database request for createLottery service on ticket resource has been successfull!");
            let data = {
                status: 200,
                message: "Lottery template have been created successfully",
                data: {
                    ticketUpdated
                }
            };
            DataBroker_1.default.processData(res, data);
        }
        catch (error) {
            Clicolor_1.default.errorMessage("Database request for update service on ticket resource has failed!");
            console.log(error);
            let data = {
                status: 401,
                message: "Updating ticket have been failed!",
                data: error
            };
            DataBroker_1.default.processError(res, data);
        }
    }),
    changeState: (req, res, next) => {
        return res.status(200).json({
            message: "You have used changeState service from ticket resource."
        });
    },
    delete: (req, res, next) => {
        return res.status(200).json({
            message: "You have used delete service from ticket resource."
        });
    }
};
exports.default = TicketController;
