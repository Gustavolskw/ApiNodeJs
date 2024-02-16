import mongoose from "mongoose";
import { autorEntity } from "./Autor.js";

const livroEntity = new mongoose.Schema({
    id: { type: mongoose.SchemaTypes.ObjectId },
    titulo: { type: mongoose.Schema.Types.String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
    autor: autorEntity
}, {
    versionKey: false
});

const livro = mongoose.model("livros", livroEntity);

export default livro;