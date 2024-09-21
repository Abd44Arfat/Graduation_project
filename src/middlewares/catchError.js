
export function catchError(fn){
    return (req,res,next)=>{
    fn(req,res,next).catch((err)=>{
        res.json(err)
    })
    }
    }