import express from "express";

const app = express();

app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "senhor dos aneis"
    },
    {
        id: 2,
        titulo: "hobbit"
    }
]

function buscaLivre(id) {
    return livros.findIndex(livro => {
        return livro.id === number(id);
    })
}



app.get("/", (req, res) => {
    res.status(200).send("curso de node js");
})

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {

})

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("livro cadastrado com sucesso")
})

export default app;