"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = __importDefault(require("../modules/auth"));
var auth = new auth_1.default();
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    AuthController.login = function (req, res) {
        var _a = req.body, email = _a.email, pwd = _a.pwd;
        var result = auth.login(email, pwd);
        res.send({ message: result });
    };
    AuthController.register = function (request, response) {
        var _a = request.body, email = _a.email, password = _a.password, name = _a.name;
        var newUser = auth.register(name, email, password);
        response.send({ message: "Account successfully created", data: newUser });
    };
    AuthController.list_of_users = function (req, res) {
        var list = auth.listOfUser();
        res.send(list);
    };
    AuthController.get_user_by_email = function (req, res) {
        var email = req.query.email;
        var user = auth.getUserByEmail(email || "");
        res.send(user);
    };
    AuthController.set_verified = function (req, res) {
        var _a = req.body, email = _a.email, isverified = _a.isverified;
        //    console.log(email , isverified)
        var user = auth.setisverified(email, isverified);
        res.send({ message: "Account Successfully updated", data: user });
    };
    return AuthController;
}());
exports.default = AuthController;
