import { NextFunction, Request, Response } from "express";



export default class AuthValidation {




    static login(req: Request, res: Response, next: NextFunction) {

        const { email, pwd } = req.body;

        if (typeof email !== "string") throw "Email must be a string"

        if (typeof pwd !== "string") throw "pwd must be a string"

        if (pwd.length < 6) throw "Password mush not be less than six (6) characters";


        // return next();
    }


    /**
     * Handles Validation of incoming register http request
     */
    static register(req: Request, res: Response, next: NextFunction) {

        const { name, email, password } = req.body;

        if (typeof name !== "string") throw "Name is invalid";

        if (typeof email !== "string") throw "Email is invalid";

        if (typeof password !== "string") throw "Password is invalid";

        if (!name) throw "Name is required";

        if (!email) throw "Email is required";

        if (!password) throw "Password is required";

        return next()
    }



}


