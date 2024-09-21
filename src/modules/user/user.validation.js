import joi from 'joi'

const signupVal= joi.object({
    name:joi.string().min(2).max(30).required(),
    email:joi.string().email().required(),
    password:joi.string().pattern(/^[A-Z][A-Za-z0-9]{8,40}$/).required(),
    repassword:joi.valid(joi.ref('password')).required()
})



const signinVal= joi.object({
    email:joi.string().email().required(),
    password:joi.string().pattern(/^[A-Z][A-Za-z0-9]{8,40}$/).required(),
})


export{
    signupVal,
    signinVal   
}