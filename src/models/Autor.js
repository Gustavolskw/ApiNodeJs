import mongoose from "mongoose";


const autorEntity = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: {
    type: String,
    required: [true, "Nome do(a) Autor(a) é Necessário"]
  },
  nacionalidade: { type: String }

}, { versionKey: false });

const autores = mongoose.model("Autores", autorEntity);

export { autores, autorEntity };