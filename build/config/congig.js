"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { db_user, db_password, db_host, db_name, dialect } = process.env;
module.exports = {
    developmect: {
        username: db_user,
        password: db_password,
        host: db_host,
        database: db_name,
        dialect: dialect,
        port: 5432
    },
    production: {
        username: db_user,
        password: db_password,
        host: db_host,
        database: db_name,
        port: 5432,
        dialect: dialect,
        logging: false
    }
};
