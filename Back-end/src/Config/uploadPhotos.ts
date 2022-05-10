import multer, { memoryStorage } from "multer";




export   const uploadFilesInMemory = multer(
    {
        storage:multer.memoryStorage(),
        limits:{fileSize:3000000}

    })  

