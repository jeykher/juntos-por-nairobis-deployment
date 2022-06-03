"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const winner_controller_1 = __importDefault(require("../controllers/winner.controller"));
const router = (0, express_1.Router)();
// GET 
router.route("/getAll").get(winner_controller_1.default.getAll);
//POST 
router.route("/createWinner").post(winner_controller_1.default.createWinner);
// PUT
router.route("/update").put(winner_controller_1.default.update);
exports.default = router;
