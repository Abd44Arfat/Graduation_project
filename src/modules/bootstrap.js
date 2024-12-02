import authRouter from "./auth/auth.router.js";
import CategoryRouter from "./Categories/categories.router.js";
import dectionaryRouter from "./dectionary/dectionary.router.js";
import LearnRouter from "./Learn/learn.router.js";
import userRouter from "./user/user.router.js";


export const bootstrap =(app)=>{
app.use('/dectionary',dectionaryRouter)
app.use('/category',CategoryRouter)
app.use('/user',userRouter)
app.use('/auth',authRouter)
app.use('/learn',LearnRouter)
}