import { Router } from "express";
import { checkEmail } from "../../middlewares/checkemail.js";
import { Validate } from "../../middlewares/validate.js";
import { changePasswordVal, signinVal, signupVal } from "../user/user.validation.js";
import { changeUserPassword, signin, signup } from "./auth.controller.js";


const authRouter=Router()


authRouter.post('/signup',Validate(signupVal),checkEmail,signup)
authRouter.post('/signin',Validate(signinVal),signin)
authRouter.patch('/changepassword',Validate(changePasswordVal),changeUserPassword)

    
export default authRouter   