"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var productRoute_1 = __importDefault(require("./routes/productRoute"));
var typeorm_1 = require("typeorm");
var app = express_1.default();
typeorm_1.createConnection();
app.use(express_1.default.json());
//route
app.use(productRoute_1.default);
var port = 8084;
app.listen(port, function () {
    console.log('Server is up and running on port number ' + port);
});
