"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let ticketArray = [];
for (let i = 1; i < 101; i++) {
    let newTicket = {
        ticketNumber: i
    };
    ticketArray = [
        ...ticketArray,
        newTicket
    ];
}
exports.default = ticketArray;
