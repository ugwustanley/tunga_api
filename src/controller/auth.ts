import { Request, Response } from "express";
import Auth from "../modules/auth";



class AuthController {




    static login(req: Request, res: Response) {

        const { email, pwd } = req.body;

        const auth = new Auth();

        const result = auth.login(email, pwd);

        res.send({ message: result });
    }


}


export default AuthController;



