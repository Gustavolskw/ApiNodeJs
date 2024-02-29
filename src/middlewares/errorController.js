import mongoose from "mongoose";
import ErroBase from "../erros/ErroBase.js";
import BadRequest from "../erros/BadRequest.js";
import ErroValidacao from "../erros/ErroValidacao.js";
import NotFound from "../erros/NotFound.js";

// eslint-disable-next-line no-unused-vars
const error = (erro, req, res, next) => {
  if (erro instanceof mongoose.Error.CastError) {
    new BadRequest().sendReponse(res);
  } else if (erro instanceof mongoose.Error.ValidationError) {
    new ErroValidacao(erro).sendReponse(res);
  } else if (erro instanceof NotFound) {
    erro.sendReponse(res);
  } else {
    new ErroBase().sendReponse(res);
  }
};
export default error;