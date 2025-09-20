import express from "express";
import productsRouter from "./routes/products";

const app = express();
const port = 3500

app.use("/api/v1", productsRouter)


app.listen(port, () =>{
    console.log(`App listening to http://localhost ${port}`)
})