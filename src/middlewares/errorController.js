import mongoose from "mongoose";
import ErroBase from "../erros/ErroBase.js";

// eslint-disable-next-line no-unused-vars
const error = (erro, req, res, next) => {
  if (erro instanceof mongoose.Error.CastError) {
    res.status(400).json({
      message: "Codigo Informado não Corresponde a um padrao de Id"
    });
  } else if (erro instanceof mongoose.Error.ValidationError) {
    const msgErros = Object.values(erro.errors).map(erro => erro.message).join("; ");

    res.status(406).json({
      message: `Os Seguintes Erros foram Encontrados: ${msgErros}`
    });
  } else {
    new ErroBase().sendReponse(res);
  }
};
export default error;