const Livro = require('./livro-schema');

const obterLivros = async () => {
  try {
    return await Livro.find();
  } catch (error) {
    console.error('Erro ao obter livros:', error);
    throw error;
  }
};

const incluir = async livro => {
  try {
    return await Livro.create(livro);
  } catch (error) {
    console.error('Erro ao incluir livro:', error);
    throw error;
  }
};

const excluir = async codigo => {
  try {
    return await Livro.deleteOne({ _id: codigo });
  } catch (error) {
    console.error('Erro ao excluir livro:', error);
    throw error;
  }
};

module.exports = {
  obterLivros,
  incluir,
  excluir,
};
