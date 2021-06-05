"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoginValidation = /** @class */ (function () {
    function LoginValidation() {
    }
    LoginValidation.login = function (req, res, next) {
        var _a = req.body, email = _a.email, pwd = _a.pwd;
        if (typeof email !== "string")
            throw "Email must be a string";
        if (typeof pwd !== "string")
            throw "pwd must be a string";
        if (pwd.length < 6)
            throw "Password mush not be less than six (6) characters";
        next();
    };
    return LoginValidation;
}());
exports.default = LoginValidation;
