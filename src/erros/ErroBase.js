class ErroBase extends Error {
  constructor(mensagem = "Erro Interno do Servidor", status = 500) {
    super();
    this.message = mensagem;
    this.status = status;
  }
  sendReponse(res) {
    res.status(this.status).send({
      mensagem: this.message,
      status: this.status
    });
  }


}
export default ErroBase;