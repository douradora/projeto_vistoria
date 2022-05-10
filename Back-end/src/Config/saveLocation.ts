import fs  from "fs";


export default function saveLocation(location,Files){



 Files.map(value=>{

        const {buffer,originalname} =value;

        fs.writeFileSync(location,buffer)







     })










}