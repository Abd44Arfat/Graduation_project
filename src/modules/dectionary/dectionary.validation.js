import joi from 'joi'





const addDectionaryVal=joi.object({
    videoUrl:joi.string().pattern(/(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be|vimeo\.com)\/.+/).required(),
    title:joi.string().min(2).max(1000).required()
})

const deleteDectionaryVal=joi.object({
    id:joi.string().hex().length(24).required()
})


export{
    deleteDectionaryVal,
    addDectionaryVal
}