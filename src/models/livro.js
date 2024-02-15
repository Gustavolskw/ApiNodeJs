import mongoose from "mongoose";

const livroEntity = new mongoose.Schema({
    id: { type: mongoose.SchemaTypes.ObjectId },
    titulo: { type: mongoose.Schema.Types.String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number }
}, {
    versionKey: false
});

const livro = mongoose.model("livros", livroEntity);

export default livro;