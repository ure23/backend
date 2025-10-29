import express from "express";
import 'dotenv/config.js';
import studentRoutes from './routers/StudentRoutes.js';

const app = express()

app.use(express.json())

try{

app.listen(process.env.PORT || 3000, () => {
  console.log(`listening to port ${process.env.PORT || 3000}...`)
})

}catch(e){
    console.log(e)
}

app.use('/students', studentRoutes);