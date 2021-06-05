"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var login_1 = __importDefault(require("../validation/login"));
var route = express_1.Router();
route.post("/login", login_1.default.login, function (req, res) {
    console.log(req.body);
    res.send("This is the login page");
});
route.post("/register", function (req, res) {
    res.send("This is the register page");
});
route.post("/password/reset", function (req, res) {
    res.send("This is the password reset page");
});
exports.default = route;
