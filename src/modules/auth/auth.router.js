import { Router } from "express";
import { Validate } from "../../middlewares/validate.js";
import { changePasswordVal, signinVal, signupVal } from "../user/user.validation.js";
import { checkEmail } from "../../middlewares/checkemail.js";
import { changeUserPassword, signin, signup } from "./auth.controller.js";
import { uploadSinleFile } from "../../fileUpload/fileUpload.js";


const authRouter=Router()


authRouter.post('/signup',uploadSinleFile('image','user'),Validate(signupVal),checkEmail,signup)
authRouter.post('/signin',Validate(signinVal),signin)
authRouter.patch('/changepassword',Validate(changePasswordVal),changeUserPassword)


export default authRouter   