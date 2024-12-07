import authRouter from "./auth/auth.router.js";
import CategoryRouter from "./Categories/categories.router.js";
import dectionaryRouter from "./dectionary/dectionary.router.js";
import LevelRouter from "./Levels/level.router.js";
import MistakeRouter from "./mistake/mistake.router.js";
import QuestionRouter from "./question/question.router.js";
import SignRouter from "./sign/sign.router.js";
import userRouter from "./user/user.router.js";
import ProcessRouter from "./userProcess/userProcess.router.js";


export const bootstrap =(app)=>{
app.use('/api/dectionary',dectionaryRouter)
app.use('/api/category',CategoryRouter)
app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)
app.use('/api/question',QuestionRouter)
app.use('/api/level',LevelRouter)
app.use('/api/sign',SignRouter)
app.use('/api/process',ProcessRouter)
app.use('/api/mistake',MistakeRouter)
}