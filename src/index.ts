import express from "express";

const app = express();
const port = 3500

app.get("/", (req, res) => res.send("Hellow word I'm learning Typescript, t's a type checking language and I love"));


app.listen(port, () =>{
    console.log(`App listening to http://localhost ${port}`)
})