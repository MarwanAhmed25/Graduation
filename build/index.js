"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
//initial port and app
const port = process.env.port || 5000;
const app = (0, express_1.default)();
//usig middel ware cors and body parser
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
//configre the server to listen to port and running it
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
app.get('/', (req, res) => {
    res.send('hello');
});
//export the app to use when importing the file
exports.default = app;
