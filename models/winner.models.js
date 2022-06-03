"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const WinnerSchema = new mongoose_1.Schema({
    eventShow: {
        type: Number,
        min: 1,
        required: true,
        unique: true
    },
    ticketNumber: {
        type: Number,
        min: 1,
        max: 100,
        minlength: 1,
        maxlength: 3
    },
    typeid: {
        type: String,
        trim: true,
        minlength: 1,
        maxlength: 1
    },
    numid: {
        type: String,
        trim: true
    },
    gender: {
        type: String,
        trim: true,
        lowercase: true
    },
    firstname: {
        type: String,
        trim: true
    },
    lastname: {
        type: String,
        trim: true
    }
}, {
    versionKey: false,
    timestamps: true
});
exports.default = (0, mongoose_1.model)("Winner", WinnerSchema);
