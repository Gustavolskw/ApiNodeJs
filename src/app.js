import express from "express";
import error from "./middlewares/errorController.js";
import connDb from "./config/dbConnect.js";
import routes from "./routes/index.js";
import error404 from "./middlewares/error404Controller.js";


const connection = await connDb();

connection.on("erro", (erro) => {
  console.error("Erro de Conexao", erro);
});


connection.once("open", () => {
  console.log("Conection Stablished with success");
});
const app = express();

routes(app);

app.use(error404);

// eslint-disable-next-line no-unused-vars
app.use(error);


export default app;