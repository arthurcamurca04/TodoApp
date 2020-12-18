"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
exports.default = mongoose_1.default.connect("mongodb+srv://admin_todoApp:G4p5h8G7yb8BukJu@cluster0.onij3.mongodb.net/TodoApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
