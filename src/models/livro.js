import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const livroSchema = new mongoose.Schema(
  {
    id: { type: String },
    titulo: {
      type: String,
      required: [true, "O título do livro é obrigatório"]
    },
    editora: {
      type: String,
      required: [true, "A editora é obrigatória"],
      /*enum: {
        values: ["Alura", "Casa do Codigo"],
        message: "Editora {VALUE} nao é permitida!"
      },*/
    },
    paginas: {
      type: Number,
      min: [10, "O valor de paginas:{VALUE} é a baixo do permitido, revise e redigite a qauntidade correta!"],
      max: [2000, "O valor de paginas:{VALUE} é acima do permitido, revise e redigite a quantidade de paginas!"],
      required: [true, "Número de paginas é obrigatório"]
    },
    preco: {
      type: Number,
      required: [true, "Valor do Livro é obrigatório"]
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Autores",
      required: [true, "O(a) autor(a) é obrigatório"],
      autopopulate: true
    }
  }
);
livroSchema.plugin(autopopulate);
const livro = mongoose.model("livros", livroSchema);

export default livro;