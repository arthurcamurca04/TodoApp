"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PORT = process.env.PORT || 9000;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var api = express_1.default();
api.use(body_parser_1.default.urlencoded({ extended: true }));
api.use(body_parser_1.default.json());
api.listen(PORT, function () {
    console.log("Server running on PORT " + PORT);
});
