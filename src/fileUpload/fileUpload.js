import multer from 'multer'
import{v4 as uuidv4} from 'uuid'

const fileUpload =(folderName)=>{
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, `uploads/${folderName}`)
        },
        filename: function (req, file, cb) {
        cb(null,  uuidv4() + '-' +file.originalname )
        }   
    })
    
    const fileFilter=(req,file,cb)=>{
    
    if(file.mimetype.startsWith('image')){
        cb(null,true)
    }else{
        cb('image only',false)
    }
    }
    const upload = multer({ storage , fileFilter })
    return upload
}   

export const uploadSinleFile = (fieldName,folderName)=>{
    return fileUpload(folderName).single(fieldName)
}

export const uploadMixOFFiles = (arrayOfFields,folderName)=>{
    return fileUpload(folderName).fields(arrayOfFields)
}