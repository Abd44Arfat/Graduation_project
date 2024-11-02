import authRouter from "./auth/auth.router.js";
import CategoryRouter from "./Categories/categories.router.js";
import dectionaryRouter from "./dectionary/dectionary.router.js";
import userRouter from "./user/user.router.js";


export const bootstrap =(app)=>{
app.use('/dectionary',dectionaryRouter)
app.use('/Category',CategoryRouter)
app.use('/',userRouter)
app.use('/auth',authRouter)
}