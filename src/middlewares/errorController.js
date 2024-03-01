import mongoose from "mongoose";
import ErroBase from "../erros/ErroBase.js";
import BadRequest from "../erros/BadRequest.js";
import ErroValidacao from "../erros/ErroValidacao.js";

// eslint-disable-next-line no-unused-vars
const error = (erro, req, res, next) => {
  if (erro instanceof mongoose.Error.CastError) {
    new BadRequest().sendReponse(res);
  } else if (erro instanceof mongoose.Error.ValidationError) {
    new ErroValidacao(erro).sendReponse(res);
  } else if (erro instanceof ErroBase) {
    erro.sendReponse(res);
  } else {
    new ErroBase().sendReponse(res);
  }
};
export default error;