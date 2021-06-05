import { Request, Response, Router } from "express";
import AuthValidation from "../validation/auth";
import AuthController from "../controller/auth";

const route = Router();


route.post("/login", AuthValidation.login,AuthController.login)


route.post("/register", (req, res) => {

    res.send("This is the register page");
})


route.post("/password/reset", (req, res) => {

    res.send("This is the password reset page");
})

export default route;