"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Auth = /** @class */ (function () {
    function Auth() {
        // const user1 = new User("sarah", "sarah@yahoo.com", "123456");
        // const user2 = new User("paul", "paul@outlook.com", "password");
        this.users = [];
        this.users = [];
    }
    Auth.prototype.login = function (email, pwd) {
        var user = this.users.find(function (e) {
            var isMatch = e.email === email && e.pwd === pwd;
            return isMatch;
        });
        if (!user)
            throw new Error("invalid email or password");
        user.lastLogin = new Date().toDateString();
        return user.name + " welcome back !";
    };
    return Auth;
}());
exports.default = Auth;
