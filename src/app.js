import express from "express";
import connDb from "./config/dbConnect.js";
import routes from "./routes/index.js";


const connection = await connDb();

connection.on("erro", (erro) => {
    console.error("Erro de Conexao", erro);
})


connection.once("open", () => {
    console.log("Conection Stablished with success");
})
const app = express();

routes(app);

export default app;