"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthValidation = /** @class */ (function () {
    function AuthValidation() {
    }
    AuthValidation.login = function (req, res, next) {
        var _a = req.body, email = _a.email, pwd = _a.pwd;
        if (typeof email !== "string")
            throw "Email must be a string";
        if (typeof pwd !== "string")
            throw "pwd must be a string";
        if (pwd.length < 6)
            throw "Password mush not be less than six (6) characters";
        // return next();
    };
    /**
     * Handles Validation of incoming register http request
     */
    AuthValidation.register = function (req, res, next) {
        var _a = req.body, name = _a.name, email = _a.email, password = _a.password;
        if (typeof name !== "string")
            throw "Name is invalid";
        if (typeof email !== "string")
            throw "Email is invalid";
        if (typeof password !== "string")
            throw "Password is invalid";
        if (!name)
            throw "Name is required";
        if (!email)
            throw "Email is required";
        if (!password)
            throw "Password is required";
        return next();
    };
    return AuthValidation;
}());
exports.default = AuthValidation;
