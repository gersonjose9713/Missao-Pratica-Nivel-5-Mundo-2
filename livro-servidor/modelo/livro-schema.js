const mongoose = require('mongoose');
const banco = require('./conexao');
const { Schema } = mongoose;

const LivroSchema = new Schema({
  _id: Schema.Types.ObjectId,
  titulo: String,
  codEditora: Number,
  resumo: String,
  autores: [String],
});

const Livro = banco.model('livros', LivroSchema);

module.exports = Livro;
