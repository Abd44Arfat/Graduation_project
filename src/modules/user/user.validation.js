import joi from 'joi'

const signupVal= joi.object({
    name:joi.string().min(2).max(30).required(),
    email:joi.string().email().required(),
    password:joi.string().min(8).max(40).pattern(/^[A-Z][A-Za-z0-9]{8,40}$/).required(),
    repassword:joi.valid(joi.ref('password')).required()
})



const signinVal= joi.object({
    email:joi.string().email().required(),
    password:joi.string().min(8).max(40).pattern(/^[A-Z][A-Za-z0-9]{8,40}$/).required().messages({
        'string.pattern.base': 'Password must start with an uppercase letter and be between 8-40 characters long',
        'string.min': 'Password must be at least 8 characters long',
        'string.max': 'Password must be no longer than 40 characters',
        'string.empty': 'Password is required'})
})



const changePasswordVal= joi.object({
    email:joi.string().email().required(),
    oldPassword:joi.string().min(8).max(40).pattern(/^[A-Z][A-Za-z0-9]{8,40}$/).required().messages({
        'string.pattern.base': 'oldPassword must start with an uppercase letter and be between 8-40 characters long',
        'string.min': 'oldPassword must be at least 8 characters long',
        'string.max': 'oldPassword must be no longer than 40 characters',
        'string.empty': 'oldPassword is required'}),
        newPassword:joi.string().min(8).max(40).pattern(/^[A-Z][A-Za-z0-9]{8,40}$/).required().messages({
            'string.pattern.base': 'newPassword must start with an uppercase letter and be between 8-40 characters long',
            'string.min': 'newPassword must be at least 8 characters long',
            'string.max': 'newPassword must be no longer than 40 characters',
            'string.empty': 'newPassword is required'})
})


export{
    signupVal,
    signinVal ,
    changePasswordVal
}