import BadRequest from "./BadRequest.js";



class ErroValidacao extends BadRequest {
  constructor(erro) {
    const msgErros = Object.values(erro.errors)
      .map(erro => erro.message)
      .join("; ");
    super(`Os Seguintes Erros foram Encontrados: ${msgErros}`);
  }

}

export default ErroValidacao;