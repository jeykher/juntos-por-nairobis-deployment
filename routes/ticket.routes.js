"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ticket_controllers_1 = __importDefault(require("../controllers/ticket.controllers"));
const router = (0, express_1.Router)();
// GET 
router.route("/getAll").get(ticket_controllers_1.default.getAll);
router.route("/getOneById").get(ticket_controllers_1.default.getOneById);
// POST
router.route("/createLottery").post(ticket_controllers_1.default.createLottery);
router.route("/create").post(ticket_controllers_1.default.create);
router.route("/getOneByNumber").post(ticket_controllers_1.default.getOneByNumber);
// PUT
router.route("/update/:id").put(ticket_controllers_1.default.update);
router.route("/changeState").put(ticket_controllers_1.default.changeState);
// DELETE
router.route("/delete").delete(ticket_controllers_1.default.delete);
exports.default = router;
