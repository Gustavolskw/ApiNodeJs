import express from "express";
import error from "./middlewares/errorController.js";
import connDb from "./config/dbConnect.js";
import routes from "./routes/index.js";


const connection = await connDb();

connection.on("erro", (erro) => {
  console.error("Erro de Conexao", erro);
});


connection.once("open", () => {
  console.log("Conection Stablished with success");
});
const app = express();

routes(app);

// eslint-disable-next-line no-unused-vars
app.use(error);


export default app;