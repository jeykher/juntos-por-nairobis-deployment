"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TicketSchema = new mongoose_1.Schema({
    ticketNumber: {
        type: Number,
        min: 1,
        max: 100,
        minlength: 1,
        maxlength: 3,
        required: true,
        unique: true
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
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        match: /[a-z0-9!#$%&´*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&´*+\=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    status: {
        type: String,
        trim: true,
        lowercase: true,
        default: 'available',
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    versionKey: false,
    timestamps: true
});
exports.default = (0, mongoose_1.model)("Ticket", TicketSchema);
