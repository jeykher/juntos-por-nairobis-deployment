"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const CONFIG = {
    general: {
        mode: process.env.ENVIRONMENT || 'development'
    },
    server: {
        port: process.env.SERVER_PORT || 8000
    },
    database: {
        engine: process.env.DB_ENGINE || "local",
        driver: process.env.DB_DRIVER || "mongodb",
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || 27017,
        name: process.env.DB_NAME || "juntospornairobis",
        user: process.env.DB_USER || "admin"
    }
};
exports.default = CONFIG;
