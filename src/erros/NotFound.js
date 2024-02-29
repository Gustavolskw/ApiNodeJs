import ErroBase from "./ErroBase.js";

class NotFound extends ErroBase {
  constructor(mensagem = "Pagina nao Encontrada") {
    super(mensagem, 404);
  }
}

export default NotFound;