import Livro from '../modelo/Livro';

const baseURL = 'http://localhost:3030/livros';

interface LivroMongo {
  _id: string;
  titulo: string;
  codEditora: number;
  resumo: string;
  autores: string[];
}

class ControleLivros {
  async obterLivros(): Promise<Livro[]> {
    try {
      const response = await fetch(baseURL);
      const livrosMongo: LivroMongo[] = await response.json();

      const livros: Livro[] = livrosMongo.map(livroMongo => ({
        codigo: livroMongo._id,
        titulo: livroMongo.titulo,
        codEditora: livroMongo.codEditora,
        resumo: livroMongo.resumo,
        autores: livroMongo.autores,
      }));

      return livros;
    } catch (error) {
      console.error('Erro ao obter livros:', error);
      return [];
    }
  }

  async incluirLivro(livro: Livro): Promise<boolean> {
    try {
      const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(livro),
      });

      return response.ok;
    } catch (error) {
      console.error('Erro ao incluir livro:', error);
      return false;
    }
  }

  async excluirLivro(codigo: string): Promise<boolean> {
    try {
      const url = `${baseURL}/${codigo}`;
      const response = await fetch(url, {
        method: 'DELETE',
      });

      return response.ok;
    } catch (error) {
      console.error('Erro ao excluir livro:', error);
      return false;
    }
  }
}

export default ControleLivros;