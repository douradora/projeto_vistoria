import { app } from "./app";

const PORT =process.env.SERVER_PORT;


app.listen(PORT,()=>console.log(`server os runnig on Port ${PORT}`))