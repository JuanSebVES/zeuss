import express from "express";

const app = express();

app.get('/', (req,res) =>{
    res.send("server encendido");
});
const port = process || 5000;
app.listen(5000,()=>{
    console.log(`server en ${port}`)
});