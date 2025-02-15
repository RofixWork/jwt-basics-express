import {Router} from "express";
import AuthController from "../controllers/auth.controllers.js";
import authMiddleware from "../middlewares/authenticated.js";

const authRouter = Router();

authRouter.post('/login', AuthController.login)
authRouter.route('/dashboard').get(authMiddleware, AuthController.dashboard);

export default authRouter