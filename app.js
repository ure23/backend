import express from "express";

const app = express();

const PORT = 3000;

app.use(express.json());

try{

app.listen(PORT, () => {
  console.log('listening to port 3000...');
}); 

}catch(e){
    console.error(e);
}

app.get("/ure", async (req, res) => {
  res.status(200).json({ message: "hello there! I am Villaranda Luraine" });
});