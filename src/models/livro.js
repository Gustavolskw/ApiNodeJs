import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: { type: String },
    titulo: {
      type: String,
      required: [true, "O título do livro é obrigatório"]
    },
    editora: {
      type: String,
      required: [true, "A editora é obrigatória"]
    },
    paginas: {
      type: Number,
      required: [true, "Número de paginas é obrigatório"]
    },
    preco: {
      type: Number,
      required: [true, "Valor do Livro é obrigatório"]
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Autores",
      required: [true, "O(a) autor(a) é obrigatório"]
    }
  }
);

const livro = mongoose.model("livros", livroSchema);

export default livro;