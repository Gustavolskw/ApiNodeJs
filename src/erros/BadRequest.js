import ErroBase from "./ErroBase.js";


class BadRequest extends ErroBase {

  constructor(mensagem = "Um ou mais dados fonecido estao incorretos") {
    super(mensagem, 400);
  }
}


export default BadRequest;